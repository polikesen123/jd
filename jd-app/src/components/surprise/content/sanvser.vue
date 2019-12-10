<template>
  <div>
    <van-grid :column-num="5">
      <van-grid-item v-for="(item,index) in date" :key="index" :icon="item.icon" :text="item.name" :to='item.path' />
    </van-grid>
  </div>
</template>
<script>
// @ is an alias to /src

import { gitP } from "@/api/home.js";
import { mapState } from "vuex";
export default {
  name: "sanvser",
  data() {
    return {
      date:[]
    };
  },
  created() {
    
    this.getDate();
  },
  computed: {
    ...mapState(["gitP"])
  },
  components: {},
  methods: {
    getDate() {
      gitP().then(data => {
        this.date = data.data
      });
      
    }
  },
  components: {}
};
</script>
<style lang="less">

</style>