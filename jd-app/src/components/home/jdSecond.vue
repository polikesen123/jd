<template>
  <div class="secondBox">
    <div class="sTop cl">
      <!-- <img src="../../assets/jdSecond.png" alt class="topImg lt" /> -->
      <div class="time lt cl">
        <span class="lt content">16点场</span>
        <van-count-down :time="time" class="lt" format>
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>:
            <span class="item">{{ timeData.minutes }}</span>:
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="moreMS rt">
        <span class="content more">更多秒杀</span>
        <span class="circle">
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="slideBox">
      <ul class="cl">
        <li v-for="item in sliderData" :key="item.id">
          <div class="imgBox">
            <img
              :src="item.img"
              alt
            />
          </div>
          <div class="price">
            <em>¥{{item.curPrice}}</em>
            <del>¥{{item.delPrice}}</del>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { jdms } from "@/api/home.js";
export default {
  name: "XXX",
  data() {
    return {
      time: 60000000,
      sliderData: []
    };
  },
  components: {},
  created() {
    this.getJdMsData()
  },
  methods: {
    getJdMsData() {
      jdms().then(data => {
        this.sliderData = data.data;
        // console.log(data)
      });
    }
  }
};
</script>
<style lang="less">
.secondBox {
  background: rgb(192, 5, 5);
  border-radius: 10px;
  .sTop {
    height: 5vw;
    line-height: 5vw;
    background: #fff;
    overflow: hidden;

    .topImg {
      width: 20vw;
      height: 100%;
    }
    .time {
      margin: 0 2vw;
      .item {
        display: inline-block;
        width: 18px;
        margin-right: 3px;
        height: 4vw;
        line-height: 4vw;
        color: #333;
        font-size: 12px;
        text-align: center;
        border: 1px solid #ccc;
      }
    }
    .content {
      font-size: 3vw;
      font-weight: 700;
      margin: 0 2vw;
    }
    .moreMS {
      .more {
        color: #f23030;
      }
      .circle {
        display: inline-block;
        width: 4vw;
        height: 4vw;
        line-height: 4vw;
        border-radius: 50%;
        background: #f23030;
        position: relative;
        top: 0.5vw;
        color: #fff;
        margin-left: -2vw;
      }
    }
  }
  .slideBox {
    width: 100%;
    height: 32vw;
    overflow: scroll;
    background: #fff;
    padding-top: 2vw;
    ul {
      display: flex;
    }
    ul > li {
      flex: 1;
      display: flex;
      flex-direction: column;
      div.price {
        height: 10vw;
        display: flex;
        flex-direction: column;
        em {
          font-weight: 800;
          font-style: normal;
          color: #f23030;
          font-size: 5vw;
        }
        del {
          font-size: 3vw;
          font-weight: 600;
        }
      }

      img {
        height: 17vw;
      }
    }
  }
}
</style>