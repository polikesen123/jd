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
          src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/97096/25/4836/88605/5de9c588Ed130b121/a60febbe6a08bc83.png!q70.webp"
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
  background: rgb(192, 5, 5);
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
  margin-bottom: 20vw;

}
</style>