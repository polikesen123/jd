<template>
  <div id="mine">
    <van-nav-bar title="我的"
                 :fixed=true
                 :border=false
                 style="height:2.5rem" />
    <van-cell-group style="margin-top:2.4rem">
      <van-cell style="background-color: #3bba63;color:#FFF;"
                label-class="labelClass"
                is-link
                center>
        <template slot="title">
          <!-- 已登录状态 -->
          <div class="personMsg"
               
               >
            <img class="iconImage"
                 src=""
                 alt="">
            <div class="sex"
                 >
              <img src=""
                   alt="">
            </div>
            <div class="personInfo"
                >
              <span></span>
              <span>手机号：</span>
            </div>
          </div>
          <!-- 未登录状态 -->
          <div class="personMsg"
               >
            <img class="iconImage"
                 src=""
                 alt="">
            <div class="personInfo"
                 >
              <div>立即登录</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 订单相关-->
    <van-cell-group>
      <van-cell title="我的订单"
                icon="label"
                value="查看全部订单"
                is-link
                >
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title"
                        />
      </van-grid>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                
                is-link />
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link
                 />
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card"
                >
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger"
                   :round=true>NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="联系客服"
                icon="phone"
                value="客服时间 07:00-22:00"
                is-link />
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link
                 />
    </van-cell-group>
    <div class="version">当前版本</div>
    <!--路由的出口-->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'user',
    data() {
        return {
            orderData:[]
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>