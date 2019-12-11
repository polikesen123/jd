// 主页
<template>
  <div class="mainPage">
    <div class="padBot">
      <router-view></router-view>
    </div>

    <nav class="navFooter">
      <div>
        <router-link to="/home">
          <i class="iconfont icon-jingdong"></i>
          <div>首页</div>
        </router-link>
      </div>

      <div>
        <router-link to="/classify">
          <i class="iconfont icon-fenlei_"></i>
          <div>分类</div>
        </router-link>
      </div>

      <div>
        <router-link to="/surprise">
          <i class="iconfont icon-liwu"></i>
          <div>惊喜</div>
        </router-link>
      </div>

      <div>
        <router-link to="/carts">
          <i class="iconfont icon-gouwuchekong"></i>
          <div>购物车</div>
        </router-link>
      </div>

      <div @click="nologin">
        <router-link to="/user">
          <i class="iconfont icon-wode"></i>
          <div>{{loginState ? "我的" : '未登录'}}</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      flag: false
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push('/home')
    }
  },
  methods: {
    nologin() {
      console.log(this.loginState);
      if (this.loginState == false) {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapState(["loginState"])
  }
};
</script>

<style lang="less" scoped>
// scoped：当前样式 只对当前模板起作用
.mainPage > .padBot {
  padding-bottom: 18vw;
}
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;
  > div {
    flex: 1;
    text-align: center;
    > a {
      text-decoration: none;
      color: #333;
      display: block;
      width: 100%;
      height: 100%;
    }
    i {
      font-size: 6vw;
      font-weight: 800;
    }
    div {
      font-size: 3vw;
    }
    a.router-link-active {
      color: #e93b3d;
    }
  }
}
</style>