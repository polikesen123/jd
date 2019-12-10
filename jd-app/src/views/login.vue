// 登录
<template>
  <div>
    <div class="top">
      <van-nav-bar title="京东登录注册" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="msg">
      <van-cell-group>
        <van-field v-model="name" clearable placeholder="用户名/邮箱/手机号" />
        <van-field v-model="psw" type="password" clearable placeholder="请输入密码" />
      </van-cell-group>
      <van-button round type="danger" @click="login">登录</van-button>
      <van-button round>一键登录</van-button>
      <span class="lt other">短信验证码登录</span>
      <span class="rt other" @click="showMask">手机快速注册</span>
    </div>
    <div class="another">
      <van-divider>其他登录方式</van-divider>
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
        <em @click="showMask">京东隐私政策</em>
      </p>
    </div>
    <my-mask :show="show" @getMaskData="getMaskData"></my-mask>
  </div>
</template>
<script>
// @ is an alias to /src
import { login } from "@/api/login.js";
import pMask from "@/components/privacyMask.vue"
export default {
  name: "XXX",
  data() {
    return {
      name: "",
      psw: "",
      show:false
    };
  },
  components: {
    'my-mask':pMask
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    showMask(){
      this.show=true;
      console.log(666)
    },
    getMaskData(val){
      this.show = val;
    },
    login() {
      if (!this.name || !this.psw) {
        this.$toast.fail("用户名密码不能为空");
        return;
      }
      let obj = {
        name: this.name,
        password: this.psw
      };
      login(obj).then(data => {
        if (data.code == 0) {
          this.$toast.success("登录成功");
          localStorage.setItem("token", "sdfgdfgaergeargdvxergr");
          this.$store.commit("stateChange", { loginState: true });
          this.$router.back();
        } else {
          this.$toast.fail("用户名或者密码错误");
        }
      });
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
    font-size: 4vw;
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
    margin: 5vw 25vw;
    em {
      color: #4a90e2;
      font-style: normal;
    }
  }
}
</style>