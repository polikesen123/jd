<template>
  <div>
    <div class="head">
      <van-icon name="arrow-left" size="5vw" @click="sreturn" style="float:left"></van-icon>京喜
      <van-icon name="more-o" style="float:right" size="5vw" @click="jurp"></van-icon>
      <my-mory class="nonon" @run="run" :flag="flag" v-show="flag"></my-mory>
    </div>
    <div class="king">
      <van-card :price="many" :desc="ms" :title="dess" :thumb="img">
        <div slot="tags">
          <van-tag plain type="danger">爆款低价</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini" @click="up(obj)">加入购物车</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import mory from "@/components/surprise/content/many.vue";
export default {
  name: "barbaby",
  data() {
    return {
      num: 0,
      flag: false,
      many: "",
      ms: "",
      dess: "",
      img: "",
      obj: {}
    };
  },

  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.obj = this.$route.query;
      if (this.obj.obj) {
        this.obj = this.obj.obj
      }

      let obj = this.obj.obj;
      this.ms = this.obj.ms;
      this.many = this.obj.many;
      this.img = this.obj.img;
      this.dess = this.obj.dess;
    },
    sreturn() {
      this.$router.push('/surprise');
    },
    jurp() {
      this.flag = !this.flag;
    },
    run() {
      this.flag = !this.flag;
    },
    up(a) {
      this.$router.push({ path: "/carts", query: { a } });
      console.dir(this.$router.push);
      //   let {diss} = this.$route.query
      //   console.log(diss)
    }
  },
  components: {
    "my-mory": mory
  }
};
</script>
<style lang="less" scoped>
.head {
  height: 10vw;
  width: 100%;
  padding: 5vw;
  box-sizing: border-box;
  margin: auto;
  > .van-icon {
    float: left;
  }
  > .van-icon {
    float: right;
  }
}
.king {
  margin-top: 5vw;
}
</style>