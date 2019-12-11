<template>
  <div class="sprs cl">
    <nav>
      <div class="head">
        <van-icon name="arrow-left" size="5vw" @click="sreturn" style="float:left"></van-icon>京喜
        <van-icon name="more-o" style="float:right" size="5vw" @click="jurp"></van-icon>
        <my-mory :flag="flag"></my-mory>
      </div>
    </nav>
    <div class="cl dw">
      <bar></bar>
    </div>

    <div v-show="(this.$route.path)===('/surprise')">
      <banner-li></banner-li>
    </div>
    <div v-show="(this.$route.path)===('/surprise')">
      <sanvser-jump></sanvser-jump>
    </div>
    <div v-show="(this.$route.path)===('/surprise')">
      <p style="color:violet">亿元补贴，爆款直降</p>
      <hplex-jump></hplex-jump>
      <span class="dess" style="color:violet;">猜你喜欢</span>
      <show-jump></show-jump>
    </div>
    <foot-jump></foot-jump>
  </div>
</template>
<script>
import mory from "@/components/surprise/content/many.vue";
import bar from "@/components/surprise/content/bar.vue";
import banner from "@/components/surprise/content/banner.vue";
import sanvser from "@/components/surprise/content/sanvser.vue";
import hplex from "@/components/surprise/content/eindox.vue";
import foot from "@/components/surprise/content/foot.vue";
import showi from "@/components/surprise/content/show.vue";
// @ is an alias to /src
export default {
  name: "surprise",
  data() {
    return {
      value: "",
      flag: false
    };
  },
  mounted() {
    document.onscroll = function() {
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let a = document.querySelector(".dw");
      if (t >= 13.600000381469727) {
        a.style.position = "fixed";
        a.style.zIndex = 100;
      } else {
        a.style.position = "static";
      }
    };
  },
  beforeDestroy() {
    document.onscroll = null;
  },
  methods: {
    sreturn() {
      this.$router.push("/home");
    },
    jurp() {
      this.flag = !this.flag;
    }
  },
  components: {
    "my-mory": mory,
    "banner-li": banner,
    bar: bar,
    "sanvser-jump": sanvser,
    "hplex-jump": hplex,
    "foot-jump": foot,
    "show-jump": showi
  }
};
</script>
<style lang="less" scoped>
html {
  width: 100vw;
}
.sprs {
  width: 100%;
  padding: 5vw;
  box-sizing: border-box;
  > head {
    height: 10vw;
    width: 100%;
    margin: auto;
    transform: translateX(50%);
    > .van-icon {
      float: left;
    }
    > .van-icon {
      float: right;
    }
  }
  .dess {
    margin: 5vw 0;
    display: inline-block;
  }
  .dw {
    overflow: hidden;
    background: white;
    top: 0;
    left: 3vw;
  }
}
</style>