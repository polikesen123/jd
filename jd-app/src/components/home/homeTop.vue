<template>
  <div class="container">
    <div class="box" v-for="item in ary" :key="item.title">
      <img :src="item.img" alt />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { hometop } from "@/api/home.js";
export default {
  name: "XXX",
  data() {
    return {
      ary: []
    };
  },
  components: {},
  created() {
    this.getHomeTopData();
  },
  methods: {
    getHomeTopData() {
      hometop().then(data => {
        this.ary = data.data;
      });
    }
  }
};
</script>
<style lang="less">
.container {
  width: 100%;
  height: 30vw;
  display: flex;
  .box {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>