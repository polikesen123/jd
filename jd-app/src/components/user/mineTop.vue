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
    <div class="bottom">
      <div class="inner cl">
        <span class="hat lt"></span>
        <span class="lt">免费试用 立领1张运费券</span>
        <span class="rt">0元试用</span>
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