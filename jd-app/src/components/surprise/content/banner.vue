<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgDate" :key="index"
      :to='item.path'>
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// @ is an alias to /src
import { surprise } from "@/api/home.js";
import { mapState } from "vuex";
export default {
  name: "banner",
  data() {
    return {
      imgDate: []
    };
  },
  created() {
    this.getImgDate();
  },
  computed: {
    ...mapState(["surprise"])
  },
  components: {},
  methods: {
    getImgDate() {
      surprise().then(data => {
        this.imgDate = data.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.swiper {
  height: 38vw;
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
</style>