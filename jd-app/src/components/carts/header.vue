<template>
  <div class="myheader">
    
    <van-nav-bar title="购物车" left-arrow  @click-left='back' @click-right="showFn">
        <van-icon name="ellipsis" slot="right"  />
    </van-nav-bar>
      <div class="moreBox">
        <more :flag="flag" @clickFn="fn"></more>
      </div>
      
      
    <van-notice-bar text="记得清空你的购物车记得清空你的购物车哦记得清空你的购物车哦哦" left-icon="volume-o"></van-notice-bar>
    <span class="edit rt">编辑商品</span>
  </div>
</template>
<script>
// @ is an alias to /src
import more from "../moreBar";
export default {
  name: "myheader",
  data() {
    return {
      show:true,
      flag: false
    };
  },
  methods: {
    fn() {
      this.flag = !this.flag;
    },
    showFn() {
      this.fn();
    },
    back(){
        this.$router.back()    
    }
  },
  components: {
    more
  }
};
</script>
<style lang="less" scoped>
.myheader {
  margin: 2vw 0;
  font-size: 18px;
  box-sizing: border-box;
  .moreBox {
    margin-right: 5vw;
    font-weight: 1000;
    z-index: 500;
  }
  .edit {
    font-size: 14px;
    width: 100%;
    height: 10vw;
    line-height: 10vw;
    text-align: right;
    padding-right: 4vw;
    border-bottom: 1px solid #eee;
  }
}
</style>