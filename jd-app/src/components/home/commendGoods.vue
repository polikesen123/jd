<template>
  <div class="commendBox">
    <div class="tilImg">
      <img
        src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
        alt
      />
    </div>
    <div class="goodsListBox cl">
      <div class="goodItem" v-for="item in jdGoods" :key="item.id">
        <goods :data="item"></goods>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import goods from "./goods";
import { getGoods } from "@/api/home.js";
import { mapState } from "vuex";
export default {
  name: "XXX",
  data() {
    return {
    };
  },
  components: {
    goods
  },
  created() {
    this.getGoodsData();     
  },
  computed: {
    ...mapState(['jdGoods'])       
  },
  methods: {
    getGoodsData() {
        getGoods().then(data => {
          localStorage.setItem("jdGoods", JSON.stringify(data.data));
          this.$store.commit('goodsData',{jdGoods:data.data})
        });
    }
  }
};
</script>
<style lang="less">
.commendBox {
  margin: 0 auto;
  padding: 0 2vw;
  .tilImg {
    height: 10vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goodsListBox {
    .goodItem {
      float: left;
      margin-bottom: 2vw;
    }
    .goodItem:nth-child(2n + 1) {
      margin-right: 2.5vw;
    }
  }
}
</style>