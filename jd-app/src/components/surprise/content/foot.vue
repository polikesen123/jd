<template>
  <div class="footBox">
    <van-grid :column-num="3" >
      <van-grid-item v-for="(item,index) in ary" :key="index" :icon="item.icon" :text="item.name" :to='item.path' />
    </van-grid>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "foot",
  data() {
    return {
      ary: [
        { name: "首页", path: "/home", icon: "wap-home-o" },
        { name: "找东西", path: "/classify", icon: "apps-o" },
        { name: "我的", path: "/user", icon: "contact" }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.footBox {
  width: 100vw;
  height: 20vw;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: white;
}
</style>