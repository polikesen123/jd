<template>
<div class="mycoupon" @click="submit">
  <!-- 优惠券单元格 -->
  <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"></van-coupon-cell>
  <!-- 优惠券列表 -->
  <van-popup :v-model="showList">
    <van-coupon-list
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @change="onChange"
      @exchange="onExchange"
    ></van-coupon-list>
  </van-popup>

</div>  

</template>


<script>
const mycoupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};

export default {
    name:'mycoupon',
  data() {
    return {
      chosenCoupon: -1,
      coupons: [mycoupon],
      disabledCoupons: [mycoupon]
    };
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(mycoupon);
    },
    showList(){
      
    },
    submit(val){
      this.submit=(this.$refs.mycoupon)
      this.submit
    }
  }
};
</script>
<style lang="less" scoped>
.mycoupon{
  padding:10vw 2vw;

}
</style>