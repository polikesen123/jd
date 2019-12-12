<template>
  <div class="cmBox">
    <div class="orderTop">
      <van-nav-bar title="账号管理" left-arrow @click-left="backFn" @click-right="showFn">
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div class="moreBox">
        <more :flag="flag" @clickFn="fn"></more>
      </div>
    </div>
    <div class="outerBox">
      <div class="mangeMy">
        <h3>管理我的账号</h3>
        <ul class="countBox cl">
          <li class="myInfo lt">
            <img
              src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
              alt
            />
          </li>
          <li lt>
            <p class="nikoName">
              <span>jd_610c788ee0177</span>
            </p>
            <p class="countName">
              用户名:
              <span>jd_610c788ee0177</span>
            </p>
          </li>
          <li class="currentLogin">当前登录</li>
        </ul>
      </div>
      <div class="address">
        <van-list>
          <van-cell>
            <h4 class="lt">收货地址管理</h4>
            <p class="rt">
              管理我的地址
              <van-icon name="arrow" />
            </p>
          </van-cell>
        </van-list>
      </div>
      <div class="manyList">
        <van-list>
          <van-cell>
            <h4 class="lt">实名认证</h4>
            <p class="rt">
              开通实名，账号更安全
              <van-icon name="arrow" />
            </p>
          </van-cell>
          <van-cell>
            <h4 class="lt">修改手机号</h4>
            <p class="rt">
              183*****861
              <van-icon name="arrow" />
            </p>
          </van-cell>
          <van-cell>
            <h4 class="lt">账号登录密码</h4>
            <p class="rt">
              定期修改更安全
              <van-icon name="arrow" />
            </p>
          </van-cell>
          <van-cell>
            <h4 class="lt">京东支付密码</h4>
            <p class="rt">
              去设置
              <van-icon name="arrow" />
            </p>
          </van-cell>
          <van-cell>
            <h4 class="lt">关联邮箱</h4>
            <p class="rt">
              未设置
              <van-icon name="arrow" />
            </p>
          </van-cell>
          <van-cell>
            <h4 class="lt">关联账号</h4>
            <p class="rt">
              <van-icon name="arrow" />
            </p>
          </van-cell>
        </van-list>
      </div>
      <div class="kfdy">
        <van-list>
          <van-cell>
            <h4 class="lt">联系客服</h4>
            <p class="rt">
              即时解答用户疑难
              <van-icon name="arrow" />
            </p>
          </van-cell>
          <van-cell>
            <h4 class="lt">切换站点</h4>
            <p class="rt">
              <van-icon name="arrow" />
            </p>
          </van-cell>
        </van-list>
      </div>
    </div>
    <footer>
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <van-icon name="records" />意见反馈
        </van-col>
        <van-col span="6">
          <van-icon name="shop-collect-o" />京东客户端
        </van-col>
        <van-col span="6">
          <van-icon name="contact" />退出登录
        </van-col>
      </van-row>
    </footer>
    <div class="jdBtmLogo"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import more from "../moreBar";
export default {
  name: "XXX",
  data() {
    return {
      flag: false,
      list: []
    };
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
    }
  },
  components: {
    more
  }
};
</script>
<style lang="less" scoped>
.cmBox {
  width: 100%;
  // background: #eee;
  .mangeMy {
    background: #fff;
    padding: 3vw 5vw;
    box-sizing: border-box;
    h3 {
      text-align: left;
      margin: 10px 0;
    }
    .countBox {
      position: relative;
      border: 1px solid transparent;
      border-radius: 5px;
      height: 20vw;
      padding: 2vw 5vw;
      box-sizing: border-box;
      background: rgb(250, 174, 174);
      li {
        text-align: left;
        font-size: 3vw;
      }
      .myInfo {
        width: 13vw;
        height: 13vw;
        margin-right: 5vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .currentLogin {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 10px;
        background-color: #ffe4e4;
        color: #e2231a;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
  }
  footer {
    .van-row {
      .van-icon {
        font-size: 6vw;
      }
    }
  }
  .jdBtmLogo {
    display: block;
    width: 100px;
    height: 20px;
    margin: 20px auto;
    background: url(data:image/png;base64,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)
      no-repeat;
    background-size: 100%;
  }
}
</style>