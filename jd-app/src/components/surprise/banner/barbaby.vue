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
          <van-tag type="danger" style="transform: translate(40px, 18px);">X {{num}}</van-tag>
        </div>
        <div slot="footer">
          <span class="sp" @click="jst()">+</span>
          <span class="sp" @click="down()">-</span>
          <van-button size="mini" @click="up(ary)">加入购物车</van-button>
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
      obj: {},
      ary: []
    };
  },

  created() {
    this.getData();
    // let jdGoods = localStorage.getItem('jdGoods');
    // this.$store.dispatch("goodsData")
  },
  methods: {
    getData() {
      this.obj = this.$route.query;
      if (this.obj.obj) {
        this.obj = this.obj.obj;
      }
      let obj = this.obj.obj;
      this.ms = this.obj.ms;
      this.many = this.obj.many;
      this.img = this.obj.img;
      this.dess = this.obj.dess;
    },
    jst() {
      if (this.num >= 10) {
        alert("该商品最大数量为10");
        this.num=10
        return
      }
      this.num++;
      console.log(this.num);
    },
    down() {
      this.num--;
      if (this.num < 0) {
        this.num = 0;
      }
    },
    sreturn() {
      this.$router.back();
    },
    jurp() {
      this.flag = !this.flag;
    },
    run() {
      this.flag = !this.flag;
    },
    up(a) {
      if (this.num == 0) {
        alert("商品数量最小值为1");
        return;
      }
      // this.obj.many *= this.num;
      this.obj.num = this.num;
      // if(this.num>=0){
      //   for(let i=this.num;i>=1;i--){

      //   }

      // console.log(a)
      // }
      for (let i = this.num - 1; i >= 0; i--) {
        if (i >= 0) {
          this.ary.push(this.obj);
        }
      }
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
.sp {
  display: inline-block;
  width: 7vw;
  height: 5vw;
  border: 1px solid rgb(233, 77, 77);
  text-align: center;
  line-height: 5vw;
  color: rgb(233, 77, 77);
  font-size: 18px;
}
.total {
  display: inline-block;
  transform: translateY(5%);
}
</style>