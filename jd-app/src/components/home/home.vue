<template>
  <div>
    <myheader></myheader>
    <grid></grid>
    <mytop></mytop>
    <div class="colorBox">
      <jdms></jdms>
      <newpeople></newpeople>
      <mytop></mytop>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import myheader from "./header";
import grid from "./grid";
import homeTop from "./homeTop";
import jdms from "./jdSecond";
import newpeople from "./newpeople";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    myheader,
    grid,
    mytop: homeTop,
    jdms,
    newpeople
  }
};
</script>
<style lang="less">
.colorBox {
  width: 100%;
  background: rgb(192, 5, 5);
  padding: 3vw;
  box-sizing: border-box;
}
</style>