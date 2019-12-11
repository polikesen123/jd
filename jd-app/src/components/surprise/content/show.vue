<template>
  <div class="headBox">
    <div class="bible" v-for="(item,index) in ary" :key="index">
      <div class="imgBox">
        <img :src="item.url" alt="">
      </div>
      <div>
        <p class="xpa">{{item.dess}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { commod } from "@/api/home.js";
import { mapState } from "vuex";
// @ is an alias to /src


export default {
  name: "showi",
  data() {
    return {
      ary:[]
    };
  },
  created() {
    this.getcmdDate();
  },
  computed: {
    ...mapState(["commod"])
  },
  components: {},
  methods: {
    getcmdDate() {
      commod().then(data => {
        this.ary = data.data;

      });
    }
  }
};
</script>
<style lang="less">
.headBox{
    width: 90vw;
    overflow: hidden;
.bible{
    width: 40vw;
    height: 40vw;
    display: inline-block;
    margin: 4vw 0;
    margin-left: 2vw;
    .imgBox{
        width: 40vw;
        height: 35vw;
        img{
            width: 100%;
            height: 100%;
        }
    }
    p{
        font-size: 14px;
    }
    .bible:nth-child(2n){
        margin-left: 0;
    }
}}
</style>