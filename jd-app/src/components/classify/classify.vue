<template>
  <div class="main">
    <my-header></my-header>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="item" v-for="(item,index) in ary" ref="qqq" @click="fn" :key="index"/>
    </van-sidebar>
    <main-box></main-box>
  </div>
</template>
<script>
// @ is an alias to /src
import header from "./header.vue";
import mainBox from "./countent.vue";
export default {
  name: "classify",
  data() {
    return {
      activeKey: 0,
      ary: [
        "女装",
        "男装",
        "母婴",
        "家具",
        "生鲜",
        "饮料",
        "玩具",
        "箱包",
        "珠宝",
        "内衣",
        "配饰"
      ],
      flag: false
    };
  },
  created() {},
  mounted() {
    //渲染完之后
    this.$refs.qqq[0].$el.style.color = "red";
  },
  components: {
    "my-header": header,
    "main-box": mainBox
  },
  methods: {
    fn(Index) {
      let a = this.$refs.qqq;
      a.forEach((item, index) => {
        if (Index == index) {
          item.$el.style.color = "red";
        } else {
          item.$el.style.color = "black";
        }
      });
    }
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.main {
  .van-sidebar {
    margin-top: 57px;
    overflow: hidden;
    // border:1px solid lightgray;
  }
  .van-sidebar-item {
    border-left: none;
  }
}
</style>