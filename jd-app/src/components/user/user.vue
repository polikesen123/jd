<template>
  <div class="mine">
    <div class="mine-top">
      <van-nav-bar title="我的" left-arrow>
        <van-icon name="ellipsis" slot="right" @click="showFn" />
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
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">京东券</van-tabbar-item>
      <van-tabbar-item icon="search" dot>京豆</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">红包</van-tabbar-item>
      <van-tabbar-item icon="paid" info="20">我的资产</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src
import more from "../moreBar";
import countmasg from "./mineTop";
export default {
  name: "user",
  data() {
    return {
      flag: false,
      active:1
    };
  },
  methods: {
    fn() {
      //   console.log(999);
      this.flag = !this.flag;
    },
    showFn() {
      this.fn();
    }
  },
  components: {
    more,
    "count-msg": countmasg
  }
};
</script>
<style lang="less">
.van-nav-bar {
  .van-icon {
    font-size: 7vw;
    color: #333;
  }
}
.van-tabbar--fixed{
    position: static;
    margin-top: 20px;
}
</style>