<template>
  <div class="secondBox">
    <div class="sTop cl">
      <img src="data:image/png;base64,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" alt class="topImg lt" />
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