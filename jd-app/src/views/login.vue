<template>
  <div>
    <div class="top">
      <van-nav-bar title="京东登录注册" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="msg">
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          placeholder="用户名/邮箱/手机号"
          @click-right-icon="$toast('question')"
        />
        <van-field v-model="password" type="password" clearable placeholder="请输入密码" />
      </van-cell-group>
      <van-button round type="danger">登录</van-button>
      <van-button round>一键登录</van-button>
      <span class="lt other">短信验证码登录</span>
      <span class="rt other">手机快速注册</span>
    </div>
    <div class="another">
      <h4>其他登录方式</h4>
      <div class="qq lt">
        <span>
          <i class="iconfont icon-qq"></i>
        </span>
        QQ
      </div>
      <div class="weixin lt">
        <span>
          <i class="iconfont icon-weixin"></i>
        </span>
        微信
      </div>
      <p class="foot lt">
        登录即代表您已同意
        <em>京东隐私政策</em>
      </p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  height: 15vw;
  line-height: 15vw;
  text-align: center;
  .van-nav-bar .van-icon {
    color: #000;
  }
}
.msg {
  padding: 5vw;
  .van-cell {
    font-size: 16px;
    height: 18vw;
    line-height: 13vw;
  }
  .van-field__control {
    height: 14vw;
    border-top: none;
  }
  .van-button--normal {
    width: 80vw;
    margin: 2vw 0;
  }
  .other {
    color: #ccc;
    padding: 2vw;
  }
}
.another {
  margin-top: 20vw;
  color: #ccc;
  span {
    display: block;
    border-radius: 50%;
    height: 12vw;
    width: 12vw;
    line-height: 12vw;
    text-align: center;
    .iconfont {
      font-size: 8vw;
    }
  }
  .qq {
    margin-left: 35vw;
    margin-right: 10vw;
    span {
      color: #4a90e2;
      background: rgba(54, 158, 228, 0.3);
    }
  }
  .weixin {
    span {
      color: green;
      background: rgba(36, 226, 121, 0.3);
    }
  }
  div {
    margin-top: 10vw;
  }
  .foot { 
      font-size: 3vw;
      text-align: center;  
      margin:5vw 25vw;
      em{
          color: #4a90e2;
          font-style: normal;
      }
  }
}
</style>