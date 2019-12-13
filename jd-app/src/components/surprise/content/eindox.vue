<template>
  <div>
    <div class="hout" v-for="(item,index) in ary" :key="index">
      <!-- v-for="(data,idx) in item.data" :key="idx" -->
      <div class="ebsgw">
        <div class="mllml" @click="up(item.data[0])">
          <img :src="item.data[0].img" alt v-lazy="item.data[0].img" />
          <span>{{item.data[0].dess}}</span>
        </div>

        <div class="adlhb" @click="up(item.data[1])">
          <img :src="item.data[1].img" alt  v-lazy="item.data[0].img"/>
          <span>{{item.data[1].dess}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { gitMs } from "@/api/home.js";
import { mapState } from "vuex";

export default {
  name: "hplex",
  data() {
    return {
      ary: [],
      n: "",// title
      a :"",// 链接
      o: "",// 描述
      s: "",// 价钱
    };
  },
  created() {
    this.gitMsu();
  },
  computed: {
    ...mapState(["gitMs"])
  },
  methods: {
    gitMsu() {
      gitMs().then(data => {
        this.ary = data.data;
        // console.log(this.ary[0].data);
      });
    },

    up(a) {
      this.$router.push({path:'/surprise/barbaby',query:a})
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.hout {
  width: 45vw;
  height: 30vw;
  display: inline-block;
  .ebsgw {
    border: 1px solid aliceblue;
    margin-right: 2vw;

    .mllml,
    .adlhb {
      width: 20vw;
      height: 26vw;
      display: inline-block;
      font-size: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ebsgw:nth-child(2n) {
    margin-right: 0;
  }
}
</style>