<template>
  <div>
    <div class="orderTop">
      <van-nav-bar title="我的订单" left-arrow @click-left="backFn" @click-right="showFn">
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div class="moreBox">
        <more :flag="flag" @clickFn="fn"></more>
      </div>
    </div>
    <div class="orderSearch">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="商品名称/商品编号/订单号"
          show-action
          @search="onSearch"
          @cancel="onCancel"
          @focus="showOverlay"
        />
      </form>
      <van-overlay :show="show" />
    </div>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <no></no>
      </van-tab>
      <van-tab title="待付款">
        <no></no>
      </van-tab>
      <van-tab title="待收货">
        <no></no>
      </van-tab>
      <van-tab title="已完成">
        <no></no>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import more from "../../moreBar";
import noOrder from "./noOrder";
export default {
  name: "XXX",
  data() {
    return {
      flag: false,
      active: 1,
      value: "",
      show: false
    };
  },
  components: {
    more,
    no: noOrder
  },
  methods: {
    fn(bol) {
      //   console.log(999);
      if (bol == undefined) {
        this.flag = !this.flag;
      } else {
        this.flag = false;
      }
    },
    showFn() {
      this.fn();
    },
    backFn() {
      this.$router.back();
    },
    onSearch() {},
    onCancel() {
        this.show = false
    },
    showOverlay() {
      this.show = true;
      console.log(777);
    }
  }
};
</script>
<style lang="less">
.orderSearch {
  .van-overlay {
    top: 100px;
    height: 85%;
    background: rgba(0, 0, 0, 0.5)
  }
}
</style>