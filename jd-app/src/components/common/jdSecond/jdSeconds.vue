<template>
  <div class="jd-second">
    <router-view></router-view>
    <footer>
      <van-tabbar v-model="active3" fixed active-color="#e93b3d" route>
        <van-tabbar-item icon="clock-o" to="/jdSeconds/msPage">京东秒杀</van-tabbar-item>
        <van-tabbar-item icon="hot-o" dot to="/jdSeconds/daily">每日特价</van-tabbar-item>
        <van-tabbar-item icon="records" to="/jdSeconds/category">品类秒杀</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/jdSeconds/sort">秒杀分类</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
     
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
    more,
    recommend
  }
};
</script>
<style lang="less" scoped>
.jd-second {
  width: 100%;
  height: 100%;
  .van-tabs {
    .van-tabs__line {
      position: static;
    }
    .van-ellipsis {
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
  }

  footer {
    .van-tabbar--fixed {
      position: fixed;
    }
    .van-tabbar-item__text {
      font-size: 18px;
    }
    .van-tabbar-item__icon {
      font-size: 26px;
    }
  }
}
</style>