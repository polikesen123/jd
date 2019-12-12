<template>
  <div class="grid">
    <van-swipe indicator-color="#1989fa" :loop="false">
      <van-swipe-item>
        <van-grid :column-num="5">
          <van-grid-item
            v-for="item in grid1"
            :key="item.name"
            :icon="item.icon"
            :text="item.name"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :column-num="5">
          <van-grid-item
            v-for="item in grid2"
            :key="item.name"
            :icon="item.icon"
            :text="item.name"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "grid",
  data() {
    return {
      grid1: [
        {
          name: "京东超市",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/88474/1/6013/16677/5df08dfaE0531a26f/1ee34446ab2875a7.png"
        },
        {
          name: "数码电器",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/97952/1/6007/16853/5df08dfdEb5f5714f/1409584330f389c5.png"
        },
        {
          name: "京东服饰",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105184/11/5992/16773/5df08e00E47d37359/78a90d5d7bb7f5b9.png"
        },
        {
          name: "京东生鲜",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105184/11/5992/16773/5df08e00E47d37359/78a90d5d7bb7f5b9.png"
        },
        {
          name: "京东到家",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/102322/27/5982/16728/5df08e06E85dde95f/d536c2abd094c75c.png"
        },
        {
          name: "充值缴费",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/100497/10/5966/16732/5df08e0aEc2f87cc3/ecc97465ee8b8746.png"
        },
        {
          name: "9.9元拼",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/93628/26/6006/16032/5df08e0cE91561db3/8e3de396f85b5422.png"
        },
        {
          name: "领劵",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/99164/8/6040/17087/5df08e0fE70bf91dc/84b0c35bba3d38b9.png"
        },
        {
          name: "赚钱",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104646/32/5834/17274/5df08e12E5ae6ea1f/3976b4ce18636db1.png"
        },
        {
          name: "PLUS会员",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/90939/13/5976/16612/5df08e15E7c6482cb/046bf510d3bcf348.png"
        }
      ],
      grid2: [
        {
          name: "京东国际",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/88474/1/6013/16677/5df08dfaE0531a26f/1ee34446ab2875a7.png"
        },
        {
          name: "京东拍卖",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/97952/1/6007/16853/5df08dfdEb5f5714f/1409584330f389c5.png"
        },
        {
          name: "唯品会",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105184/11/5992/16773/5df08e00E47d37359/78a90d5d7bb7f5b9.png"
        },
        {
          name: "玩3C",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105184/11/5992/16773/5df08e00E47d37359/78a90d5d7bb7f5b9.png"
        },
        {
          name: "沃尔玛",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/102322/27/5982/16728/5df08e06E85dde95f/d536c2abd094c75c.png"
        },
        {
          name: "美妆馆",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/100497/10/5966/16732/5df08e0aEc2f87cc3/ecc97465ee8b8746.png"
        },
        {
          name: "京东旅行",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/93628/26/6006/16032/5df08e0cE91561db3/8e3de396f85b5422.png"
        },
        {
          name: "拍拍二手",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/99164/8/6040/17087/5df08e0fE70bf91dc/84b0c35bba3d38b9.png"
        },
        {
          name: "物流查询",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104646/32/5834/17274/5df08e12E5ae6ea1f/3976b4ce18636db1.png"
        },
        {
          name: "全部",
          icon:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/90939/13/5976/16612/5df08e15E7c6482cb/046bf510d3bcf348.png"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less">
.grid {
  margin-top: 4vw;
  .van-swipe-item {
    background: url(https://m.360buyimg.com/mobilecms/s750x324_jfs/t1/95813/23/5795/86624/5def3371Eff6a2ba5/9a2f93b9abcdf182.jpg.dpg)
      center center no-repeat;
    background-size: cover;
    .van-grid-item__content {
      background: transparent;
      padding: 8px 6px;
      .van-icon__image {
        width: 1.4em;
        height: 1.4em;
      }
      .van-grid-item__text {
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>