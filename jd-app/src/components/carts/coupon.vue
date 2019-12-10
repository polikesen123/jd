<template>
<div class="mycoupon">
  <!-- 优惠券单元格 -->
  
  <van-coupon-cell :coupons="coupons" @click="showList"/>
  <!-- 优惠券列表 -->
  
  <van-popup v-model="show">
    <span class="left" @click="back">&lt</span>
    <span class="right" @click="submit">&gt</span>
    <van-coupon-list
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      
      @change="onChange"
      @exchange="onExchange"
      input-placeholder="请输入520it兑换"
    />
  </van-popup>

</div>  

</template>


<script>

export default {
    name:'mycoupon',
  data() {
    return {
      show:false,
      chosenCoupon: -1,
      coupons: [{                  // 优惠券信息     
        available: 1,
        condition: '无使用门槛\n最多优惠1.5元',
        reason: '',
        value: 150,
        name: '优惠券 ',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '1.5',
        unitDesc: '元'
      }, {                  // 优惠券信息     
        available: 1,
        condition: '无使用门槛\n最多优惠2元',
        reason: '',
        value: 200,
        name: '优惠券 ',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '2',
        unitDesc: '元'
      }],
      
    };
  },

  methods: {
    onChange(index) {
      this.show = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      if (code == '520it') {
        this.coupons.push(this.coupons[0]);
      }
    },
    showList(){
      this.show = !this.show;
    },
    back(){
      this.show = false;
    },
    submit(){
      this.$router.go(-1);
    }
    
  }
};
</script>
<style lang="less" scoped>
.mycoupon{
  padding:10vw 2vw;
}
.left{
  font-size: 18px;
  font-weight: 800;
  margin-top: 4vw;
  margin-right:-4vw;
}
.right{
  font-size: 18px;
  margin-top: 4vw;
  font-weight: 800;
  margin-left: 280px;
  z-index: 2;
}
</style>