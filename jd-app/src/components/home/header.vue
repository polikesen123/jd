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
      <span class="rt">登录</span>
    </nav>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white" :loop="true">
        <van-swipe-item>
            1
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <van-swipe-item>5</van-swipe-item>
        <van-swipe-item>6</van-swipe-item>
        <van-swipe-item>7</van-swipe-item>
        <van-swipe-item>8</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {
      value: ""
    };
  },
  components: {}
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
    // width: 100%;
    height: 10vw;
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
    margin-top: 2vw;
    .van-swipe{
        width: 92vw;
        height: 100%;
        background: gold;
        border-radius: 5px;
        img{
            width: 100%;
            height: 100%;
        }
    }
  }
}
</style>