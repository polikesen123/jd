<template>
  <div>
    <div class="myFooter lt" v-for="item in shopData" :key="item.id">
      <div class="imgBox">
        <img :src="item.url" alt />
      </div>
      <p class="textBox">{{item.text}}</p>
      <div class="desc">
        <span class="money lt">{{item.price}}</span>
        <span class="shop rt">
          <van-icon name="cart-o" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { footer } from "@/api/carts.js";
export default {
  name: "xxx",
  data() {
    return {
      shopData: [],
    };
  },
  components: {},
  created() {
    this.getFooterData();
  },
  methods: {
    getFooterData() {
      footer().then(data => {
        this.shopData = data.data;
      })
  },
}
}
</script>
<style lang="less" scoped>
.many {
  margin: 8vw auto;
}
.myFooter {
  width: 49.4vw;
  height: 78vw;
  margin-bottom: 10vw;
  border: 1px solid #ccc;
  .imgBox {
    width: 48vw;
    img {
      width: 100%;
    }
  }
  .textBox {
    width: 48vw;
    font-size: 14px;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .desc {
    margin-top: 2vw;
    .money {
      color: red;
    }
    .shop {
      font-size: 22px;
      color: red;
      margin-right: 4vw;
    }
  }
}
</style>