<template>
  <div class="imgDescBox rt">
    <p class="til">热门分类</p>
    <div class="imgBox lt" v-for="(item,index) in aryList" :key='index'>
      <img :src="item.url" alt="*" />
      <p class="desc">{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  props:['curIndex'],
  data() {
    return {
      aryList: [
        {
          id: 1,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 2,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 3,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 4,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 5,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 6,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 7,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 8,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 9,
          url:
            "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
          desc: "手机"
        },
        {
          id: 1,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 2,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 3,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 4,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 5,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 6,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 7,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 8,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 9,
          url:
            "https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg",
          desc: "手机"
        },
        {
          id: 1,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 2,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 3,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 4,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 5,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 6,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 7,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 8,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        },
        {
          id: 9,
          url:
            "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
          desc: "手机"
        }
      ],
      
    };
  },
  components: {}
};
</script>
<style lang="less">
.imgDescBox {
  width: 76vw;
  height: 100%;
  overflow: hidden;
  margin: 15vw auto 10vw;
  display: inline-block;
  .til {
    text-align: left;
    margin:2vw;
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
  .imgBox {
    width: 20vw;
    padding-left:4vw;
    img {
      width: 100%;
    }
    .desc {
      font-size: 14px;
      color: grey;
      margin:2vw;
    }
  }
}
</style>