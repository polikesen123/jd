<template>
  <div>
    <div class="msTop">
      <van-nav-bar title="京东秒杀" left-arrow @click-left="backFn" @click-right="showFn">
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
      <div class="moreBox">
        <more :flag="flag" @clickFn="fn"></more>
      </div>
    </div>
    <van-tabs v-model="active1">
      <van-tab title="最后疯抢 已开抢">
        <div class="lastBuy">
          <van-tabs v-model="active2">
            <van-tab title="综合">
              <div class="goodRecommend">
                <recommend></recommend>
              </div>
            </van-tab>
            <van-tab title="销量">销量 2</van-tab>
            <van-tab title="折扣">折扣 3</van-tab>
            <van-tab title="价格">价格 4</van-tab>
            <van-tab>
              <div slot="title">
                <van-icon name="filter-o" />
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </van-tab>
      <van-tab title="20:00 抢购中">内容 2</van-tab>
      <van-tab title="22:00 即将开抢">内容 3</van-tab>
      <van-tab title="00:00 明日开抢">内容 4</van-tab>
      <van-tab title="06:00 明日开抢">内容 4</van-tab>
      <van-tab title="08:00 明日开抢">内容 4</van-tab>
      <van-tab title="10:00 明日开抢">内容 4</van-tab>
      <van-tab title="12:00 明日开抢">内容 4</van-tab>
      <van-tab title="14:00 明日开抢">内容 4</van-tab>
      <van-tab title="16:00 明日开抢">内容 4</van-tab>
      <van-tab title="18:00 明日开抢">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import more from "../../moreBar";
import recommend from "../../home/commendGoods";
export default {
  name: "XXX",
  data() {
    return {
      flag: false,
      active1: 0,
      active2: 0,
      active3: 0
    };
  },
  methods: {
    fn(bol) {
      //   console.log(999);
      if (bol == undefined) {
        this.flag = !this.flag;
      } else {
        this.flag = false;
      }
    },
    showFn() {
      this.fn();
    },
    backFn() {
      this.$router.back();
    }
  },
  components: {
    more,
    recommend
  }
};
</script>
<style lang="less">
</style>