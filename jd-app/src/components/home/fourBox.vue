<template>
  <div class="fourContainer">
    <ul>
      <li v-for="item in data" :key="item.id">
        <img
          src="https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/99861/24/3544/15836/5de0b85eEb5a0cced/05cef5ce3bc3bbc2.png!q70.jpg.dpg"
          alt
          class="boxbg"
        />
        <div class="imgbox">
          <img :src="item.img" alt />
        </div>
        <span class="ads">{{item.ads}}</span>
        <strong class="til">{{item.til}}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
import { four } from "@/api/home.js";
export default {
  name: "XXX",
  data() {
    return {
      data: []
    };
  },
  components: {},
  created() {
      this.getData()
  },
  methods: {
    getData() {
      four().then(data => {
        this.data = data.data;
      });
    }
  }
};
</script>
<style lang="less">
.fourContainer {
  height: 30vw;
  width: 100%;
  ul {
    height: 30vw;
    display: flex;
    li {
      flex: 1;
      position: relative;
      color: #fff;
      .boxbg {
        width: 100%;
        height: 100%;
      }
      .imgbox {
        height: 16vw;
        width: 18vw;
        position: absolute;
        top: 6px;
        left: 11px;
        background: #fff;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ads {
        width: 100%;
        position: absolute;
        bottom: 8vw;
        left: 0vw;
        font-size: 1vw;
      }
      .til {
        position: absolute;
        bottom: 1vw;
        left: 14px;
        font-size: 4vw;
      }
    }
  }
}
</style>