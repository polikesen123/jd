<template>
  <div class="newsBox cl">
    <div class="leftLogo lt">
      <img
        src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"
        alt
      />
    </div>
    <ul class="newsListBox lt">
      <li class="item cl">
        <span class="newsState lt">最新</span>
        <span class="content lt">男士手表选皮表带还是钢表带？看完区别再作选择</span>
      </li>
    </ul>
    <div class="newsMore rt">更多</div>
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
.newsBox {
  height: 10vw;
  line-height: 10vw;
  border-radius: 5px;
  width: 96vw;
  background: #fff;
  margin: 0 auto;
  .leftLogo {
    width: 22vw;
    margin:2vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .newsListBox {
    width: 57vw;
    overflow: hidden;
    li {
      .newsState {
        color: rgb(189, 22, 22);
        margin: 0 2vw;
        font-size: 3vw;
      }
      .content {
        width: 46vw;
        font-size: 3vw;
        overflow: hidden; /*超出的部分隐藏起来。*/
        white-space: nowrap; /*不显示的地方用省略号...代替*/
        text-overflow: ellipsis; /* 支持 IE */
      }
    }
  }
  .newsMore{
      border-left: 1px solid #ccc;
      font-size: 3vw;
      padding:0 2vw;
    //   box-sizing: border-box;
  }
}
</style>