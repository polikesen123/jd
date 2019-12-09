<template>
  <div class="aaa">
    <span class="jx" style="z-index:30" @click="run">精选</span>
    <div class="vant-box">
      <van-tabs>
        <span class="vant">
          <van-icon name="arrow-down" />
        </span>
        <van-tab
          v-for="(item) in ary"
          :key="item.path"
          :title="item.text"
          :to="item.path"
        >
            <router-view></router-view>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "bar",
  data() {
    return {
      ary: [
        {
          text: "手机",
          path: "/surprise/phone",
        },
        {
          text: "食品",
          path: "/surprise/foot"
        },
        {
          text: "家电",
          path: "/surprise/homeshod"
        },
        { text: "内衣", 
        path: "/surprise/underwear" },
        {
          text: "百货",
          path: "/surprise/department"
        },
        {
          text: "美妆",
          path: "/surprise/makeup"
        },
        {
          text: "家装",
          path: "/surprise/decoration"
        },
        {
          text: "运动",
          path: "/surprise/motion"
        },

        {
          text: "图书",
          path: "/surprise/books"
        },

        {
          text: "钟表",
          path: "/surprise/block"
        },

        {
          text: "数码",
          path: "/surprise/digital"
        },

        {
          text: "生鲜",
          path: "/surprise/fresh"
        },

        {
          text: "家具",
          path: "/surprise/furniture"
        },

        {
          text: "汽车",
          path: "/surprise/bus"
        },

        {
          text: "个护",
          path: "/surprise/protect"
        },

        {
          text: "箱包",
          path: "/surprise/bags"
        },

        {
          text: "母婴",
          path: "/surprise/mubaby"
        },

        {
          text: "配饰",
          path: "/surprise/ornaments"
        },

        {
          text: "鞋靴",
          path: "/surprise/shoes"
        },

        {
          text: "男装",
          path: "/surprise/manwear"
        },

        {
          text: "女装",
          path: "/surprise/girlwear"
        }
      ]
    };
  },
  methods: {
    run() {
      if(this.$route.path=='/surprise')return
      this.$router.push("/surprise");
    },
    jump(n) {
      console.log(n);
    }
  },
  components: {
  }
};
</script>
<style lang="less">
div.aaa {
  width: 100vw;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
  > span {
    position: absolute;
    left: 5vw;

    transform: translateY(50%);
    font-size: 16px;
  }
  div.vant-box {
    // width: 60vw;
    div.van-tabs__wrap {
      width: 63vw;
      left: 13vw;
    }
  }
  .van-tabs__content > span {
    position: absolute;
    right: 15vw;
    top: 0vw;
    font-size: 20px;
    transform: translateY(50%);
  }
}
</style>