module.exports = {
    publicPath:'./',
    lintOnSave:false,
    devServer:{
        //本地访问localhost:8080 由node 把请求转接到代理地址
        proxy:'https://www.zhihu.com/api/'
    }
}