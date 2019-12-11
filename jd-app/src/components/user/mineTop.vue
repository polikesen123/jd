<template>
  <div class="mineTopBox">
    <div class="settingBox cl">
      <span class="rt" @click="settingFn">
        <van-icon name="setting-o" />账户管理
      </span>
    </div>
    <div class="center">
      <div class="avator" @click="mangeFn">
        <img
          src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
          alt
        />
        <span>
          待实名认证
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="topCenter">
        <p class="editCount" @click="editFn">
          {{defaultName||username}}
          <van-icon name="edit" />
        </p>
        <p class="name">用户名: {{username?username:defaultName}}</p>
        <p class="cirle cl">
          <span class="lt">
            京享值
            <em>307</em>
          </span>
          <span class="rt">
            小白信用
            <em>68.9</em>
            <van-icon name="arrow" />
          </span>
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="inner cl">
        <span class="hat lt"></span>
        <span class="lt">免费试用 立领1张运费券</span>
        <span class="rt">0元试用</span>
      </div>
    </div>
    <div class="editMask">
      <van-overlay :show="show">
        <div class="wrapper" @click.stop>
          <van-panel title="编辑京东账户信息">
            <div class="zIndexUp">
              <p class="username">
                用户名:
                <span> {{username?username:defaultName}}</span>
              </p>
              <p class="tips1">用户名不可修改</p>
              <van-cell-group class="niName">
                <van-field v-model="defaultName" label="昵称" placeholder="请输入昵称" />
              </van-cell-group>
              <p class="tips2">4-20个字符，可由中英文、数字、"-"、"_" 组成</p>
            </div>
            <div slot="footer">
              <van-button size="small" @click="closeMask">取消</van-button>
              <van-button size="small" type="danger" @click="saveNikoName">保存</van-button>
            </div>
          </van-panel>
        </div>
      </van-overlay>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "XXX",
  data() {
    return {
      show: false,
      defaultName:''
    };
  },
  computed: {
    ...mapState(["username"])
  },
  methods: {
    settingFn() {
      this.$router.push("/user/countSetting");
    },
    mangeFn() {
      this.$router.push("/user/countMange");
    },
    editFn() {
      this.show = true;
      this.defaultName= this.defaultName || this.username
    },
    closeMask() {
      this.show = false;
    },
    saveNikoName() {
      this.show = false;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.mineTopBox {
  height: 38vw;
  width: 100%;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  padding: 0 4vw;
  box-sizing: border-box;
  border-radius: 0 0 10vw 10vw;
  overflow: hidden;
  .editMask {
    padding: 5vw;
    .wrapper .zIndexUp .van-cell-group{
      z-index: 9999;
      width: 82vw;
    }
    .tips1,
    .tips2 {
      text-align: left;
      text-indent: 15px;
      color: #ccc;
    }
    .tips2{
      font-size: 12px;

    }
    .username,
    .van-field {
      height: 12vw;
      line-height: 12vw;
      width: 70vw;
      margin: 10px auto;
      border-radius: 10px;
      background: whitesmoke;
      text-align: left;
      text-indent: 10px;
    }
    .van-field {
      line-height: 8vw;
    }
  }
  .settingBox {
    height: 10vw;
    line-height: 10vw;
    span {
      font-size: 3vw;
      //   margin-right: 6vw;
      .van-icon {
        margin: 0 1vw;
        font-size: 4vw;
        position: relative;
        top: 3px;
      }
    }
  }
  .center {
    display: flex;
    .avator {
      width: 16vw;
      height: 16vw;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        width: 21vw;
        bottom: -5px;
        left: -10px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 2vw;
        color: #ccc;
      }
    }
    .topCenter {
      margin-left: 5vw;
      text-align: left;
      font-size: 4vw;
      color: #fff;
      .editCount {
        font-weight: 700;
      }
      .name {
        color: #eee;
      }
      .cirle {
        span {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          margin: 3px;
          font-size: 12px;
          font-weight: 700;
          em {
            font-style: normal;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    margin-top: 7px;
    height: 40px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #ffe678;
    font-size: 12px;
    .inner {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 7px 10px 10px;
      background: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png)
        center center no-repeat;
      background-size: 100% 67px;
      border-radius: 8px;
      .hat {
        width: 57px;
        height: 12px;
        background: url(https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png)
          no-repeat center;
        background-size: 100% 100%;
        margin: 3px 5px;
      }
    }
  }
}
</style>