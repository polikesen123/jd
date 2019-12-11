<template>
  <div class="eastContainer">
    <div class="topTil">
      <img
        src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"
        alt
      />
    </div>
    <div class="mainBox">
      <ul class="cl">
        <li>
          <div class="tilBox">
            <span class="til">出游系列</span>
            <span class="desc">守护你的旅途</span>
          </div>
          <div class="imgbox cl">
            <div class="first lt">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91560/26/5304/246827/5deca0c4Ed1d86b1f/0f8f0b6612887245.jpg!q70.jpg.dpg"
                alt
              />
            </div>
            <div class="last lt">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91759/30/5286/200013/5deca0c1E5b4c466b/e85536b3193c28ed.jpg!q70.jpg.dpg"
                alt
              />
            </div>
          </div>
        </li>
        <li>
          <div class="tilBox">
            <span class="til">出游系列</span>
            <span class="desc">守护你的旅途</span>
          </div>
          <div class="imgbox">
            <div class="first">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91560/26/5304/246827/5deca0c4Ed1d86b1f/0f8f0b6612887245.jpg!q70.jpg.dpg"
                alt
              />
            </div>
            <div class="last">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91759/30/5286/200013/5deca0c1E5b4c466b/e85536b3193c28ed.jpg!q70.jpg.dpg"
                alt
              />
            </div>
          </div>
        </li>
        <li>
          <div class="tilBox">
            <span class="til">出游系列</span>
            <span class="desc">守护你的旅途</span>
          </div>
          <div class="imgbox">
            <div class="first">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91560/26/5304/246827/5deca0c4Ed1d86b1f/0f8f0b6612887245.jpg!q70.jpg.dpg"
                alt
              />
            </div>
          </div>
        </li>
        <li>
          <div class="tilBox">
            <span class="til">出游系列</span>
            <span class="desc">守护你的旅途</span>
          </div>
          <div class="imgbox">
            <div class="first">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91560/26/5304/246827/5deca0c4Ed1d86b1f/0f8f0b6612887245.jpg!q70.jpg.dpg"
                alt
              />
            </div>
          </div>
        </li>
        <li>
          <div class="tilBox">
            <span class="til">出游系列</span>
            <span class="desc">守护你的旅途</span>
          </div>
          <div class="imgbox">
            <div class="first">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91560/26/5304/246827/5deca0c4Ed1d86b1f/0f8f0b6612887245.jpg!q70.jpg.dpg"
                alt
              />
            </div>
          </div>
        </li>
        <li>
          <div class="tilBox">
            <span class="til">出游系列</span>
            <span class="desc">守护你的旅途</span>
          </div>
          <div class="imgbox">
            <div class="first">
              <img
                src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91560/26/5304/246827/5deca0c4Ed1d86b1f/0f8f0b6612887245.jpg!q70.jpg.dpg"
                alt
              />
            </div>
          </div>
        </li>
      </ul>
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
<style lang="less" scoped>
.eastContainer {
  width: 100%;
  height: 90vw;
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
        // float: left;
        display: inline-block;
        background-color: #fff;
        margin-bottom: 2vw;
        margin-right: 2vw;
        .tilBox {
          height: 10vw;
          display: flex;
          flex-direction: column;
          .desc {
            text-align: left;
            font-size: 3vw;
            color: #aaa;
          }
          .til {
            text-align: left;
            font-weight: 700;
            color: rgb(0, 132, 255);
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
      li:nth-child(1),
      li:nth-child(2) {
        width: 46vw;
        padding: 1vw;
        box-sizing: border-box;
      }
      li:nth-child(2) {
        margin-right: 0;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>