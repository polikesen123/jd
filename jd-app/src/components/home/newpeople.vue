<template>
  <div class="newBox">
    <div class="left">
      <img
        src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
        alt
      />
    </div>
    <div class="right">
      <img
        src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
        alt
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.newBox {
  display: flex;
  height: 35vw;
  width: 100%;
  border-radius: 5px;
  margin: 3vw 0; 
  div {
    flex: 1;
    img {
        width: 100%;
        height: 100%;
    }
  }
}
</style>