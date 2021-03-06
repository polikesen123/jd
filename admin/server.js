// 实现一个登录的功能
let express = require('express');
let qs = require('qs');
let session = require('express-session');
let {
    readFile,
    writeFile
} = require('./utils/promiseFs');
let app = express();
app.listen(3000, function () {
    console.log("后端接口服务 起于 3000")
})

// 解决跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', "Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id")
    req.method == 'OPTIONS' ? res.send('OK') : next();
})

// 把post请求的参数 转成普通对象 存放到req.body上
app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})


// 把读取数据的操作放到中间件处理
//用户登录信息
app.use((req, res, next) => {
    readFile('./json/user.json').then(data => {
        req.userData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
//轮播图
app.use((req, res, next) => {
    readFile('./json/swiper.json').then(data => {
        req.swiperData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})


// 京喜
app.use((req, res, next) => {
    readFile('./json/gitP.json').then(data => {
        req.gitPData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
app.use((req, res, next) => {
    readFile('./json/describe.json').then(data => {
        req.msdata = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
app.use((req, res, next) => {
    readFile('./json/commodity.json').then(data => {
        req.commod = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})





app.use((req, res, next) => {
    readFile('./json/top1.json').then(data => {
        req.topData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})

app.use((req, res, next) => {
    readFile('./json/jdMS.json').then(data => {
        req.djmsData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
app.use((req, res, next) => {
    readFile('./json/four.json').then(data => {
        req.fourData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})

//京东推荐好物
app.use((req, res, next) => {
    readFile('./json/goodsItem.json').then(data => {
        req.goodsData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})

//每日好逛
app.use((req, res, next) => {
    readFile('./json/everyday.json').then(data => {
        req.eveDayData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})

app.use(session({
    //在这个中间件之后 会在 req上多了一个 session的属性
    name: 'qqq', // 默认  connect.sid
    secret: 'myqqq', // session会根据 这个属性 和后端种在session的属性名 来生成对应的字段
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}));

//用户信息
app.post('/reg', function (req, res) {
    // 实现注册接口
    let {
        username,
        password
    } = req.body;
    let data = req.data;
    let bol = data.some(item => {
        return item.username === username
    })
    //bol是true; 证明之前有这个人
    if (bol) {
        res.send({
            code: 1,
            msg: 'already has this man'
        })
        return;
    }
    // Object.assign(data,req.body);// datajiu
    data.push(req.body);
    writeFile('./json/user.json', JSON.stringify(data)).then(data => {
        // 写入成功
        res.send({
            code: 0,
            data: 'success'
        })
    }).catch(() => {
        res.send({
            code: 1,
            data: 'fail'
        })
    })
})
app.post('/login', function (req, res) {
    let {
        username,
        password
    } = req.body;
    console.log(11, req.body)
    let bol = req.userData.some(item => {
        return item.username == username && item.password == password
    })
    if (bol) {
        // 登录成功， 需要后端给前端种植一个cookie
        console.log(22, username)
        req.session.userID = username; // 咱们后端在session上种植了一个属性
        res.send({
            code: 0,
            data: {
                name: username
            }
        })
    } else {
        res.send({
            code: 1,
            msg: '用户名密码错误'
        })
    }
})
app.get('/info', function (req, res) {
    console.log(req.session.userID);
    // 登陆成功之后， 后端会给前端种植一个cookie;
    // 以后每一次请求后台接口的时候， 后端都会根据这个cookie值 去判断 前端是否处于有效登录期
    // 后端的具体写法就是  根据登陆时 在session上设置的属性 还有没有来进行判断
    if (req.session.userID) {
        res.send({
            code: 0,
            data: {
                name: req.session.userID,
                sex: 0,
                age: 18
            }
        })
    } else {
        res.send({
            code: 1,
            msg: "no login"
        })
    }
})

app.get('/swiper', function (req, res) {
    res.send({
        code: 0,
        data: req.swiperData
    })
})
// 京喜
app.get('/gitP', function (req, res) {
    res.send({
        code: 0,
        data: req.gitPData
    })
})
app.get('/describe', function (req, res) {
    res.send({
        code: 0,
        data: req.msdata
    })
})
app.get('/commodity', function (req, res) {
    res.send({
        code: 0,
        data: req.commod
    })
})
//京东秒杀上边的
app.get('/hometop', function (req, res) {
    res.send({
        code: 0,
        data: req.topData
    })
})
app.get('/jdms', function (req, res) {
    res.send({
        code: 0,
        data: req.djmsData
    })
})
app.get('/four', function (req, res) {
    res.send({
        code: 0,
        data: req.fourData
    })
})

app.get('/gitP', function (req, res) {
    res.send({
        code: 0,
        data: req.swiperData
    })
})


//购物车功能 main
app.use((req, res, next) => {
    readFile('./json/main.json').then(data => {
        req.aryData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
//京东购物车 main 
app.get('/main', function (req, res) {
    res.send({
        code: 0,
        data: req.aryData
    })
})
//购物车的下边的商品
app.use((req, res, next) => {
    readFile('./json/footer.json').then(data => {
        req.shopData = JSON.parse(data);
        next()
    }).catch(err => {
        // 读取失败 给前端500
        res.status(500);
        res.send('找不到你要的数据哦');
    })
})
//京东购物车 footer 
app.get('/footer', function (req, res) {
    res.send({
        code: 0,
        data: req.shopData
    })
})
app.get('/goods', function (req, res) {
    res.send({
        code: 0,
        data: req.goodsData
    })
})
app.get('/everyday', function (req, res) {
    res.send({
        code: 0,
        data: req.eveDayData

    })
})

