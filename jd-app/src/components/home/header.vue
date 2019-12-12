<template>
  <div class="myheader">
    <nav>
      <i class="iconfont icon-caidan lt" @click="toMenu"></i>
      <van-search
        placeholder="请输入搜索关键词"
        v-model="value"
        shape="round"
        background="rgb(192,5,5)"
        class="lt search"
        @click="run(name)"
      />
      <span class="rt" @click="Tologin" v-show="!loginState">登录</span>
      <span class="rt" v-show="loginState" @click="toMy">
        <i class="iconfont icon-wode1"></i>
      </span>
    </nav>

    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white" :loop="true">
        <van-swipe-item
          v-for="item in imgData"
          :key="item.title"
          @click="runCarts(item.dess,item.img,item.many,item.dess)"
        >
          <img :src="item.img" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { swiper } from "@/api/home.js";
import { mapState } from "vuex";
export default {
  name: "XXX",
  data() {
    return {
      value: "",
      imgData: [],
      name: "首页",
      obj:{}
    };
  },
  mounted() {
    console.log(this.loginState);
  },
  components: {},
  created() {
    this.getSwiperData();
  },
  computed: {
    ...mapState(["loginState"])
  },
  methods: {
    runCarts(n, a, s, o) {
      this.obj.ms = n;
      this.obj.img = a;
      this.obj.many = s;
      this.obj.dess = o;
      let obj = this.obj;
      this.$router.push({ path: "/surprise/barbaby", query: { obj } });
    },
    run(name) {
      this.$router.push({ path: "/surprise/seek", query: name });
    },
    Tologin() {
      this.$router.push("/login");
      console.log(666);
    },
    toMy() {
      this.$router.push("/user");
    },
    toMenu() {
      this.$router.push("/classify");
    },
    getSwiperData() {
      swiper().then(data => {
        this.imgData = data.data;
        // console.log(111, data.data);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.myheader {
  //   width: 100%;
  padding: 1vw 3vw;
  line-height: 12vw;
  color: #fff;
  height: 45vw;
  border-radius: 0 0 30px 30px;
  background-image: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/94697/4/6010/79398/5df0bfedE47c81502/8a9f6573430cab20.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #c00505;
  nav {
    width: 100vw;
    height: 12vw;
    position: fixed;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    top: 0;
    left: 0;
    padding: 0 3vw;
    z-index: 999;
    background: #c00505;
    overflow: hidden;
    .iconfont {
      font-size: 6vw;
    }
    .search {
      margin-left: 3vw;
      width: 75vw;
      padding: 6px 12px;
    }
  }
  .swiper {
    height: 38vw;
    margin-top: 10vw;
    .van-swipe {
      width: 92vw;
      height: 100%;
      background: gold;
      border-radius: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>