<template>
  <div class="non" v-show="flag">
    <div 
    class="turn" 
    v-for="item in ary" 
    :key="item.num"
    @click='jump'
    >
        {{item.content}}</div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "mory",
  props:['flag'],
  data() {
    return {
      ary: [
        {
          content: "首页",
          num: 0,
          link:'/home'
        },
        {
          content: "购物车",
          num: 1,
          link:'classify'
        },
        {
          content: "分类搜索",
          num: 2,
          link:'surprise'
        },
        {
          content: "我的京东",
          num: 3,
          link:'user'
        },
        {
          content: "浏览记录",
          num: 4,
          link:'user/'
        }
      ]
    };
  },
  created() {
      console.log(this.flag)
  },
  methods: {
    jump() {
        
    },
    
  },
  components: {}
};
</script>
<style lang="less">
    .non {
      background: rgba(0, 0, 0, 0.8);
      height: 31vw;
      width: 26vw;
      float: right;
      box-sizing: border-box;
      position: absolute;
      right: 5vw;
      z-index: 99;
      >.turn{
          height: 5vw;
          width: 100%;
          text-align: left;
          margin-top: 1vw;
          color: aliceblue;
      }
    }

</style>