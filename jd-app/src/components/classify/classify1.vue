<template>
  <div>
    <my-header></my-header>
    <div class="main lt" @click='handle'>
      <van-sidebar >
        <van-sidebar-item    
          v-for="(item,index) in ary"
          :title="item.name"
          :class="{active:index === curIndex}"
          :key="index"
        />
      </van-sidebar>
      <my-countent v-for="(item,index) in ary"
          :class="{active:index === curIndex}"
          :key="index" :index='index'>
        </my-countent>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import header from "./header.vue";
import countent from "./countent.vue";
export default {
  name: "classify",
  data() {
    return {
      curIndex:0,
      ary: [
        {name:"女装"},      
        {name:"男装"},
        {name:"母婴"},
        {name:"家具"},
        {name:"生鲜"},
        {name:"饮料"},
        {name:"玩具"},
        {name:"箱包"},
        {name:"珠宝"},
        {name:"内衣"},
        {name:"配饰"}
      ],
    };
  },
  created() {},
  mounted() {
    //渲染完之后
    /* this.$refs.qqq[0].$el.style.color = "red"; */
  },
  components: {
    "my-header": header,
    "my-countent": countent
  },
  methods: {
    /* fn(Index) {
      let a = this.$refs.qqq;
      a.forEach((item, index) => {
        if (Index == index) {
          item.$el.style.color = "red";
        } else {
          item.$el.style.color = "black";
        }
      });
    } */
    handle(ev){
      let target = ev.target,
      tarTag = target.tagName;
      if(tarTag === 'my-countent'){
        this.curIndex = parseInt(target.getAttribute(index))
      }
    }
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.main {
  .van-sidebar {
    margin-top: 12vw;
    display: inline-block;
    overflow: hidden;
    // border:1px solid lightgray;
  }
  .van-sidebar-item {
    border-left: none;
  }
}
</style>