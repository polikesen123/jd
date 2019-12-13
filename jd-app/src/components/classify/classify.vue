<template>
  <div class="tabBox">
    <c-header></c-header>
    <div class="left-arrow lt">
      <ul class="tab lt">
        <li
          v-for="(item,index) in aryList"
          :key="item.id"
          v-html="item.name"
          :class="{active:index===curIndex}"
          @click="handle(index)"
        ></li>
      </ul>
    </div>
    <div class="right-arrow rt">
      <div
        class="imgBox rt"
        v-for="(item,index) in aryList"
        :key="item.id"
        :class="{content:true,active:index===curIndex}">
        <p class="til">{{item.til}}</p>
        <div class="urlBox" v-for="(i,idx) in item.children" :key="idx">
          <img :src="i.url" alt="*" v-lazy="i.url" />
          <p class="desc" v-html="i.desc"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import classHeader from "./header";
const aryList = [
  {
    id: 1,
    name: "华为手机",
    til: "热门推荐",
    children: [
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      },
      {
        url:
          "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
        desc: "荣耀华为"
      }
    ]
  },
  {
    id: 2,
    name: "时尚女鞋",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t18526/341/795029040/5652/935ccfa0/5aa6410bNec7253f4.jpg",
        desc: "女士凉鞋"
      }
    ]
  },
  {
    id: 3,
    name: "女士卫衣",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      },
      {
        url:
          "https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg",
        desc: "卫衣黄色"
      }
    ]
  },
  {
    id: 4,
    name: "幼儿果汁",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t19495/168/2617418122/31372/26d9e333/5b02b44dN73aaa997.jpg",
        desc: "黄桃汁儿"
      }
    ]
  },
  {
    id: 5,
    name: "母婴童装",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      },
      {
        url:
          "https://img11.360buyimg.com/focus/s140x140_jfs/t19354/93/2653761680/31569/33d6e811/5b02b411N63ca034c.jpg",
        desc: "婴儿奶粉"
      }
    ]
  },
  {
    id: 6,
    name: "男装鞋子",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      },
      {
        url:
          "https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg",
        desc: "小白鞋"
      }
    ]
  },
  {
    id: 7,
    name: "酒水饮料",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t19159/209/2659532703/7667/6c91df3f/5b0236d4N68a7505f.jpg",
        desc: "vsijg"
      }
    ]
  },
  {
    id: 8,
    name: "礼品鲜花",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
        desc: "茉莉花儿"
      }
    ]
  },
  {
    id: 9,
    name: "京东超市",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      },
      {
        url:
          "https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",
        desc: "洗衣液"
      }
    ]
  },
  {
    id: 10,
    name: "食物生鲜",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      },
      {
        url:
          "https://img10.360buyimg.com/focus/s140x140_jfs/t21448/247/189820564/20127/d5cc76fd/5b024112Nbaa67999.jpg",
        desc: "饼干蛋糕"
      }
    ]
  },
  {
    id: 11,
    name: "箱包手袋",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      },
      {
        url:
          "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
        desc: "拉杆箱"
      }
    ]
  },
  {
    id: 12,
    name: "生活旅行",
    til: "热门推荐",
    children: [
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      },
      {
        url:
          "https://img14.360buyimg.com/focus/s140x140_jfs/t12256/23/1304410642/16133/f898d909/5a1ea21dN294080d1.png",
        desc: "机票"
      }
    ]
  }
];
export default {
  name: "XXX",
  data() {
    return {
      aryList,
      //选项卡索引
      curIndex: 0
    };
  },
  methods: {
    handle(index) {
      this.curIndex = index;
      console.log(666);
    }
  },
  components: {
    "c-header": classHeader
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.tabBox {
  box-sizing: border-box;
  width: 100vw;
  margin-top: 15vw;
}
.left-arrow {
  height: 146vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
.right-arrow {
  height: 146vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
.tabBox .tab {
  // display: flex; //在同一行
  width: 22vw;
  height: 146vw;
}
.tabBox .tab li {
  background: #eee;
  font-size: 14px;
  padding: 3vw 2vw;
  line-height: 10vw;
  border: none;
}
.tabBox .tab li.active {
  background: #ccc;
}
.tabBox .imgBox {
  width: 78vw;
  border: 1px solid #aaa;
  box-sizing: border-box;
  border: none;
  display: none;
}
.til {
  padding: 4vw 0 2vw 2vw;
  text-align: left;
  font-size: 15px;
  font-weight: 900;
  color: black;
}
.tabBox .imgBox.active {
  display: block;
}
.urlBox {
  width: 20vw;
  padding: 3vw 2vw;
  display: inline-block;
  img {
    width: 100%;
  }
  .desc {
    font-size: 14px;
    color: grey;
    margin: 2vw;
  }
}
</style>