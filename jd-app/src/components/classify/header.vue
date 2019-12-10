<template>
  <div class="head">
    <div slot="action" class="iconfont icon-zuojiantou" @click="homeBtn"></div>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" style="width:90%;">
      <div slot="action" @click="onSearch" class="iconfont icon-gengduo hideClass">
        <div class="bigBox" v-show="flag" @click.self.stop="fn">
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
      </div>
    </van-search>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      value: "",
      flag: false
    };
  },
  components: {},
  methods: {
    onSearch() {
      this.flag = !this.flag;
    },
    homeBtn() {
      this.$router.push("/home");
      // console.log(666)
    },
    cartBtn() {
      this.$router.push("/carts");
    },
    myBtn() {
      this.$router.push("/user");
    },
    fn() {
      this.flag = false;
      console.log(this.flag);
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  height: 57px;
  line-height: 57px;
  border: 1px solid lightgray;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 1;
}
.bigBox {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.iconfont {
  font-size: 30px;
}
.icon-zuojiantou {
  float: left;
}
.icon-gengduo {
  float: right;
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
}
</style>