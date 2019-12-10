<template>
  <div class="mineTopBox">
    <div class="settingBox cl">
      <router-link to="/user/countSetting" tag="span" class="rt">
        <van-icon name="setting-o" />账户管理
      </router-link>
    </div>
    <div class="center">
      <router-link to="/user/countMange" class="avator" tag="div">
        <img
          src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
          alt
        />
        <span>
          待实名认证
          <van-icon name="arrow" />
        </span>
      </router-link>
      <div class="topCenter">
        <p class="editCount">
          jd_610c788ee0177
          <van-icon name="edit" />
        </p>
        <p class="name">用户名:jd_610c788ee0177</p>
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
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
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
}
</style>