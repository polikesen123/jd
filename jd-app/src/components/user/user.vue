<template>
  <div class="mine">
    <div class="mine-top">      
      <van-nav-bar title="我的" left-arrow  @click-left="backFn"  @click-right="showFn">
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>

      <div class="moreBox">
        <more :flag="flag" @clickFn="fn"></more>
      </div>

    </div>
    <div class="countMsg">
      <count-msg></count-msg>
    </div>

    <van-grid class="gridOne">
      <van-grid-item icon="coupon-o" text="待付款" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="refund-o" text="退换/售后" />
      <van-grid-item icon="bag-o" text="全部订单" />
    </van-grid>
    <van-row type="flex" justify="space-around" class="rowSecond">
      <van-col span="4">
        <span class="topSpan">
          <b>0</b>张
        </span>
        <span>京东券</span>
      </van-col>
      <van-col span="4">
        <span class="topSpan tagFlag">
          <b class="tag">立减40元</b>
          开通有礼
        </span>
        <span>白条</span>
      </van-col>
      <van-col span="4">
        <span class="topSpan">
          <b>0</b>个
        </span>
        <span>京豆</span>
      </van-col>
      <van-col span="4">
        <span class="topSpan">
          <van-icon name="paid" />
        </span>
        <span>我的资产</span>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="rowThree">
      <van-col span="6">
        <span class="topSpan">
          <b>0</b>
        </span>
        <span>商品收藏</span>
      </van-col>
      <van-col span="6">
        <span class="topSpan">
          <b>0</b>
        </span>
        <span>店铺收藏</span>
      </van-col>
      <van-col span="6">
        <span class="topSpan">
          <b>3</b>
        </span>
        <span>我的足迹</span>
      </van-col>
    </van-row>
    <div class="myCatogery">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(value,index) in flAry"
          :key="index"
          :icon="value.icon"
          :text="value.name"
        />
      </van-grid>
    </div>
    <div class="service">客户服务</div>
    <van-divider :style="{ color: '#666', borderColor: '#999', padding: '0 16px' }">为您推荐</van-divider>
    <div class="myCommend">
      <goods></goods>
    </div>
  </div>

</template>
<script>
// @ is an alias to /src
import more from "../moreBar";
import countmasg from "./mineTop";
import goods from '../home/commendGoods'
export default {
  name: "user",
  data() {
    return {
      flag: false,
      active: 1,
      flAry: [
        { name: "我的预约", icon: "https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png.webp" },
        { name: "京东火车票", icon: "https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png.webp" },
        { name: "应用推荐", icon: "https://img14.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png.webp" },
        { name: "用户福利", icon: "https://img14.360buyimg.com/jdphoto/jfs/t1/77298/12/10667/2170/5d80ce19Efefd7bc0/36e4d4d6e4bbb577.png.webp" },
        { name: "京东机票", icon: "https://img13.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png.webp" },
        { name: "京东酒店", icon: "https://img30.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png.webp" }
      ]
    };
  },
  methods: {
    fn(bol) {
      //   console.log(999);
      if(bol == undefined){
        this.flag = !this.flag;
      }else{
        this.flag = false;
      }
      
    },
    showFn() {
      this.fn();
    },
    backFn(){
      this.$router.back()
    }
  },
  components: {
    more,
    "count-msg": countmasg,
    goods
  }
};
</script>
<style lang="less">
.mine {
  background-color: rgb(245, 243, 243);
}
.gridOne,
.myCatogery {
  margin-top: 20px;
}
.rowSecond,
.rowThree {
  margin-top: 20px;
  background-color: #fff;
}
.rowThree {
  .topSpan {
    b {
      color: #333;
      font-size: 14px;
    }
  }
}
.van-nav-bar {
  .van-icon {
    font-size: 7vw;
    color: #333;
  }
}
.van-tabbar--fixed {
  position: static;
  margin-top: 20px;
}
.van-col {
  display: flex;
  flex-direction: column;
  font-size: 3vw;
  padding: 4vw 0;
  .tagFlag {
    position: relative;
    .tag {
      position: absolute;
      top: -14px;
      left: 15%;
      width: 60px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      padding: 0 2px;
      background: -webkit-linear-gradient(left, #e93b3d, #ff9574);
      border-radius: 8px;
      border-bottom-left-radius: 0;
      font-size: 12px;
      transform: scale(0.8);
      color: #fff;
    }
  }
  .topSpan {
    color: #e93b3d;
    margin-bottom: 1vw;
    .van-icon-paid {
      font-size: 5vw;
    }
  }
}
.service {
  height: 15vw;
  line-height: 15vw;
  text-align: left;
  text-indent: 3vw;
  padding-left: 5vw;
  color: #666;
  background-color: #fff;
  margin-top: 20px;
}
</style>