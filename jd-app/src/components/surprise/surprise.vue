<template>
  <div class="sprs">
    <nav>
      <div class="head">
        <van-icon name="arrow-left" size="5vw" @click="sreturn" style="float:left"></van-icon>京喜
        <van-icon name="more-o" style="float:right" size="5vw" @click="jurp"></van-icon>
        <my-mory :flag="flag"></my-mory>
      </div>
      <div class="nav">
        <div>
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
      </div>
    </nav>
    <bar></bar>
    <div>
      <banner-li></banner-li>
    </div>
  </div>
</template>
<script>
import mory from "@/components/surprise/content/many.vue";
import bar from '@/components/surprise/content/bar.vue'
import banner from "@/components/surprise/content/banner.vue";
// @ is an alias to /src
export default {
  name: "surprise",
  data() {
    return {
      value: "",
      flag: false
    };
  },

  methods: {
    onSearch() {
      console.log(this);
    },
    sreturn() {
      console.log(this);
      this.$router.push("/home");
    },
    jurp() {
      this.flag = !this.flag;
    }
  },
  components: {
    "my-mory": mory,
    'banner-li':banner,
    bar:bar
  }
};
</script>
<style lang="less" scoped>
.sprs {
  position: fixed;
  width: 100%;
  padding: 5vw;
  box-sizing: border-box;
  > head {
    height: 10vw;
    width: 100%;
    margin: auto;
    transform: translateX(50%);
    > .van-icon {
      float: left;
    }
    > .van-icon {
      float: right;
    }
  }
  .nav {
    height: 15vw;
    > div {
      display: inline-block;
      > .arrow-left {
        display: inline-block;
      }
      > .search {
        width: 80vw;
        margin: auto;
      }
    }
  }
}
</style>