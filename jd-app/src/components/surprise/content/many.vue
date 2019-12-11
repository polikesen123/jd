<template>
  <div class="cl nonel" @click="$emit('run')">
    <div class="non" >
      <div
        class="turn"
        v-for="(item) in ary"
        :key="item.num"
        @click="jump(item.link)"
      >{{item.content}}</div>
    </div>
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
          link: "/home"
        },
        {
          content: "购物车",
          num: 1,
          link: "/classify"
        },
        {
          content: "分类搜索",
          num: 2,
          link: "/surprise"
        },
        {
          content: "我的京东",
          num: 3,
          link: "/user"
        },
        {
          content: "浏览记录",
          num: 4,
          link: "/user"
        }
      ]
    };
  },
  mounted() {
    
  },
  created() {
    
  },
  methods: {
    jump(n) {
      this.$router.push(n);
    }
    // run(){
    //   // this.$router.back()
    //   let a = document.querySelector('.nonel')
    //   this.flag = !this.flag
    //   a.style.display = this.flaag
    // }
  },
  components: {}
};
</script>
<style lang="less">
.nonel {
  width: 1000px;
  height: 1000px;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;

  .non {
    background: rgba(0, 0, 0, 0.8);
    height: 31vw;
    width: 26vw;
    box-sizing: border-box;
    position: relative;
    left: 70vw;
    top: 10vw;
    z-index: 999;
    > .turn {
      height: 5vw;
      width: 100%;
      text-align: left;
      margin-top: 1vw;
      color: aliceblue;
    }
  }
}
</style>