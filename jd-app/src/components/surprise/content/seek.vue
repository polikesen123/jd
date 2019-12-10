<template>
  <div class="father">
    <div class="head">
      <van-icon name="arrow-left" size="5vw" @click="sreturn" style="float:left"></van-icon>京喜
      <van-icon name="more-o" style="float:right" size="5vw" @click="jurp"></van-icon>
       <my-mory :flag="flag"></my-mory>
    </div>

    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      class="search"
    >
      <div slot="action" @click.13="onSearch">搜索</div>
    </van-search>
  </div>
</template>
<script>
// @ is an alias to /src

import mory from "@/components/surprise/content/many.vue";

export default {
  name: "seek",
  data() {
    return {
      value: "",
      flag: false
    };
  },
  methods: {
    onSearch() {
        if(!this.value) return
        alert('本网站倒闭拉')
    },
    sreturn(){
        this.$router.back()
    },
    jurp(){ this.flag = !this.flag;}
  },
  components: {
      'my-mory':mory
  }
};
</script>
<style lang="less">
.father{
    width: 100vw;
    box-sizing: border-box;
    padding: 5vw;
   .head {
    height: 10vw;
    width: 100%;
    margin: auto;
    > .van-icon {
      float: left;
    }
    > .van-icon {
      float: right;
    }}

}

</style>