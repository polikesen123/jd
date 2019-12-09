<template>
    <div>
      <my-header></my-header>

      <my-coupon></my-coupon>
      
      <my-main></my-main>
    </div>
</template>

<script>
// @ is an alias to /src
import mycoupon from './coupon.vue'
import myheader from './header.vue'
import mymain from './main.vue'
import Vue from 'vue'
Vue.filter('money',function(val){
    return "￥"+(val/100).toFixed(2)
})
export default {
  name: "carts",
  data() {
    return {
        
    };
  },
  methods: {
  },
  filters:{
    
  },
  components: {
      "my-coupon":mycoupon,
      "my-header":myheader,
      "my-main":mymain,
  }
};
</script>
<style lang="less" scoped>
</style>