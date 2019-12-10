<template>
  <div class="eveyBox">
    <div class="topTil">
      <img
        src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/83520/33/13546/23804/5dcc2979E64764662/4654df31323ded7c.png!q70.jpg.dpg"
        alt
      />
    </div>
    <div class="mainBox">
      <ul class="cl">
        <li v-for="item in everyDayData" :key="item.id">
          <div class="tilBox">
            <span class="til">{{item.til1}}</span>
            <span class="desc">{{item.til2}}</span>
          </div>
          <div class="imgbox">
            <div class="first">
              <img :src="item.img" alt />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import {getEveryDay} from '@/api/home.js'
export default {
  name: "XXX",
  data() {
    return {
      everyDayData: []
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getEveryDay().then(data => {
        this.everyDayData = data.data;
        console.log(this.everyDayData)
      });
    }
  },
  components: {}
};
</script>
<style lang="less">
.eveyBox {
  width: 100%;
  height: 80vw;
  margin-top: -8vw;
  .topTil {
    height: 10vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mainBox {
    height: 72vw;
    border-radius: 5px;
    overflow: hidden;
    ul {
      li {
        float: left;
        background-color: #fff;
        margin-bottom: 2vw;
        margin-right: 2vw;
        .tilBox {
          height: 10vw;
          display: flex;
          flex-direction: column;
          .desc {
            text-align: center;
            font-size: 3vw;
            color: #aaa;
          }
          .til {
            text-align: center;
            font-weight: 700;
            color: rgb(255, 38, 0);
          }
        }
        .imgbox {
          padding: 1vw;
          div {
            width: 18vw;
            height: 18vw;
            float: left;
            margin: 2vw 1vw;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>