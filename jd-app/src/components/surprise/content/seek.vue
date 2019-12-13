<template>
  <div class="father">
    <div class="head">
      <van-icon name="arrow-left" size="5vw" @click="sreturn" style="float:left"></van-icon>
      {{name}}
      <van-icon name="more-o" style="float:right" size="5vw" @click="jurp"></van-icon>
      <my-mory :flag="flag" v-show="flag" @run="run"></my-mory>
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

import more from "@/components/moreBar.vue";

export default {
  name: "seek",
  data() {
    return {
      value: "",
      flag: false,
      name: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let a = this.$route.query[0];
      let b = this.$route.query[1];
      if (this.$route.query[2]) {
        let c = this.$route.query[2];
        this.name = a + b + c;
      }
      this.name = a + b;
      console.log(this.name);
    },
    onSearch() {
      if (!this.value) return;
      alert("对不起，本网站倒闭拉");
    },
    sreturn() {
      this.$router.back();
    },
    jurp() {
      this.flag = !this.flag;
    },
    run() {
      this.flag = !this.flag;
    }
  },
  components: {
    "my-mory": more
  }
};
</script>
<style lang="less">
.father {
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
    }
  }
}
</style>