<template>
  <div class="bigBox" v-show="flag" :show="show" @click="fn">
    <ul class="showClass">
      <li @click="homeBtn">
        <i class="iconfont icon-shouye"></i>首页
      </li>
      <li>
        <i class="iconfont icon-fenlei"></i>分类搜索
      </li>
      <li @click="cartBtn">
        <i class="iconfont icon-gouwuchekong"></i>购物车
      </li>
      <li @click="myBtn">
        <i class="iconfont icon-wode2"></i>我的京东
      </li>
      <li>
        <i class="iconfont icon-liulanjilu"></i>浏览记录
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props: ["flag"],
  data() {
    return {
      show :false
    };
  },
  mounted() {
    document.onscroll = ()=> {
      this.$emit("clickFn",false);
    };
  },
  beforeDestroy() {
    document.onscroll = null;
  },
  methods: {
    fn() {
      //   console.log(666);
      this.$emit("clickFn");
    },
    homeBtn() {
      
    },
    cartBtn() {},
    myBtn() {}
  },
  components: {}
};
</script>
<style lang="less" scoped>
.bigBox {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 500;
  height: 100%;
  z-index: 500;
}
.iconfont {
  font-size: 30px;
}
.icon-zuojiantou {
  float: left;
}
ul {
  width: 130px;
  height: 200px;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 50px;
  right: 10px;
  border-radius: 5px;
  text-align: center;

  li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid lightgray;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
  }
  .iconfont {
    font-size: 20px;
    color: #fff;
    float: left;
    margin-left: 15px;
  }
}
.icon-gengduo {
  float: right;
}
</style>