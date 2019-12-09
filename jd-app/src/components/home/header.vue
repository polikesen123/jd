<template>
  <div class="myheader">
    <nav>
      <i class="iconfont icon-caidan lt"></i>
      <van-search
        placeholder="请输入搜索关键词"
        v-model="value"
        shape="round"
        background="rgb(192,5,5)"
        class="lt search"
      />
      <span class="rt" @click="Tologin" v-show="!loginState">登录</span>
      <span class="rt" v-show="loginState" @click="toMy">
        <i class="iconfont icon-wode1"></i>
      </span>
    </nav>
    
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white" :loop="true">
        <van-swipe-item v-for="item in imgData" :key="item.title">
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
      imgData: []
    };
  },
  components: {},
  created() {
    this.getSwiperData();
  },
  computed: {
    ...mapState(["loginState"])
  },
  methods: {
    Tologin() {
      this.$router.push("/login");
    },
    toMy(){
      this.$router.push('/user')
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
  line-height: 10vw;
  background: rgb(192, 5, 5);
  color: #fff;
  height: 45vw;
  background: rgb(192, 5, 5);
  border-radius: 0 0 30px 30px;
  nav {
    width: 100vw;
    height: 10vw;
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
      padding: 3px 12px;
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