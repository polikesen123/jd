<template>
  <div>
    <myheader></myheader>
    <grid></grid>
    <mytop></mytop>
    <div class="colorBox">
      <jdms></jdms>
      <newpeople></newpeople>
      <div class="top2">
        <img
          src="https://m.360buyimg.com/mobilecms/jfs/t1/103489/38/6075/189632/5df0ab9cE2f2aef29/45567056fa285b85.gif"
          alt
        />
      </div>
      <four></four>
      <east></east>
      <every></every>
    </div>
    <div class="homeMainBox">
      <jd-news></jd-news>
      <commend></commend>
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
import fourBox from "./fourBox";
import eastGarden from './eastGarden';
import every from './everyDay'
import jdNews from './jdNews.vue';
import commend from './commendGoods'
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
    newpeople,
    four: fourBox,
    east:eastGarden,
    every,
    'jd-news':jdNews,
    commend
  }
};
</script>
<style lang="less">
.colorBox {
  width: 100%;
  background: #ff3841;
  padding: 3vw;
  box-sizing: border-box;
  .top2 {
    width: 100%;
    height: 30vw;
    border-top: 1px solid rgba(218, 203, 203, 0.3);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.homeMainBox{
  background: #eee;
  width: 100%;
}
</style>