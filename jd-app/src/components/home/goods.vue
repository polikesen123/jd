<template>
  <div class="goodsBox" @click="run(data.title,data.img,data.price,data.desc)">
    <div class="imgBox">
      <img :src="data.img" alt />
    </div>
    <div class="desc">
      <p class="text">
        <span v-show="data.firstIcon">
          <img
            src="//img20.360buyimg.com/jdphoto/s30x30_jfs/t1/92431/8/3524/3386/5de0fef1E3c40acf6/fadb063ec99d52b1.png!q70.webp"
            alt
          />
        </span>
        <span class="jdSM" v-show="data.secondIcon">
          <img
            src="https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png"
            alt
          />
        </span>
        {{data.desc}}
      </p>
      <p class="info cl">
        <span class="price lt">¥{{data.price}}</span>
        <span class="similar rt">看相似</span>
      </p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props: ["data"],
  data() {
    return {
      obj:{}
    };
  },
  methods: {
    run(n, a, s, o) {
      this.obj.ms = n;
      this.obj.img = a;
      this.obj.many = s;
      this.obj.dess = o;
      let obj = this.obj;
      this.$router.push({ path: "/surprise/barbaby", query: { obj } });
    }
  },
  components: {}
};
</script>
<style lang="less">
.goodsBox {
  width: 46vw;
  height: 60vw;
  background: #fff;
  .imgBox {
    height: 40vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    font-size: 3vw;
    padding: 1vw 0;
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: 700;
      span {
        display: inline-block;
      }
      .jdSM {
        width: 38px;
        height: 13px;
        margin: 0 1vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .info {
      .price {
        font-size: 4vw;
        font-weight: 700;
        color: rgb(185, 33, 22);
      }
      .similar {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 2px;
      }
    }
  }
}
</style>