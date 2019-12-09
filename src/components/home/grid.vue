<template>
  <div class="grid">
    <van-swipe  indicator-color="#1989fa" :loop="false" >
      <van-swipe-item>
        <van-grid :column-num="5">
          <van-grid-item v-for="item in grid1" :key="item.name" :icon="item.icon" :text="item.name" />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :column-num="5">
         <van-grid-item v-for="item in grid2" :key="item.name" :icon="item.icon" :text="item.name" />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "grid",
  data() {
    return {
        grid1:[{name:'京东超市',icon:'shop-o'},{name:'数码电器',icon:'tv-o'},{name:'京东服饰',icon:'bag-o'},{name:'京东生鲜',icon:'logistics'},{name:'京东到家',icon:'home-o'},{name:'充值缴费',icon:'after-sale'},{name:'9.9元拼',icon:'bill-o'},{name:'领劵',icon:'bookmark-o'},{name:'省钱',icon:'balance-o'},{name:'PLUS会员',icon:'vip-card-o'}],
         grid2:[{name:'京东国际',icon:'shop-o'},{name:'京东拍卖',icon:'shop-o'},{name:'唯品会',icon:'shop-o'},{name:'玩3C',icon:'shop-o'},{name:'沃尔玛',icon:'shop-o'},{name:'美妆馆',icon:'shop-o'},{name:'京东旅行',icon:'shop-o'},{name:'拍拍二手',icon:'shop-o'},{name:'物流查询',icon:'shop-o'},{name:'全部',icon:'shop-o'}],
    };
  },
  components: {
     
  }
};
</script>
<style lang="less">
.grid{
    margin-top: 4vw;
}
</style>