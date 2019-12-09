<template>
  <div class="mymain">
    <div class="cartBox" v-for="(item,index) in aryList" :key="item.id">
      <van-checkbox class="lt tipBox" v-model="item.isSelect"></van-checkbox>
      <div class="lt imgBox">
        <img :src="item.url" />
      </div>
      <div class="rt textBox">
        <p>{{item.text}}</p>
        <span class="desc">{{item.desc}}</span>
        <span class="buy lt">{{item.price|money}}</span>
        <van-stepper class="compute rt" v-model="item.count"></van-stepper>
      </div>
    <!-- 收藏 删除按钮 -->
      
        <van-button class="collect" size="mini" @click="collect(index)">收藏</van-button>
        <van-button class="del" size="mini" @click="del(index)">删除</van-button>
      
      <!-- 结算功能 -->
      <van-submit-bar v-model="item.total" button-text="去结算" @submit="onSubmit">
        <van-checkbox v-model="checkAll">全选</van-checkbox>
        <h3>{{total|money}}</h3>
        <span slot="tip">
          <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
    <!-- 判断是否删除 -->
    <div class="mask" v-show="show">
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title ">
            <van-icon name="warning-o"/>
         </h3>
        </div>
        <div class="panel-body text-center">
          <h2 class="delText">是否确认删除此商品</h2>
        </div>
        <div class="btnBox text-right">
          <button class="btn btn-primary" @click="sure">确定</button>
          <button class="btn btn-danger" @click="cancel">取消</button>
        </div>
      </div>
    </div>
    <!-- 判断是否收藏 -->
    <div class="mark" v-show="showw">
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title ">
            <van-icon name="warning-o"/>
         </h3>
        </div>
        <div class="panel-body text-center">
          <h2 class="delText">是否确认收藏此商品</h2>
        </div>
        <div class="btnBox text-right">
          <button class="btns btn-primary" @click="collectS">确定</button>
          <button class="btns btn-danger" @click="collectC">返回</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "XXX",
  data() {
    return {
      delIndex: null,
      collectIndex:null,
      show: false,
      showw:false,
      aryList: [
        {
          id: 1,
          url:
            "https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/98835/26/5221/254811/5debd045E904adfb7/7d65aacb44b33f92.jpg",
          text: "卡西欧|2019款315欧式手表（支持尺寸修改）已经出售加预定",
          desc: "秒杀中...",
          isSelect: false,
          count: 2,
          price: "550000"
        },
        {
          id: 2,
          url:
            "https://img10.360buyimg.com/cms/s80x80_jfs/t20599/5/1848245261/259599/458bc9b5/5b39951dNfa084179.jpg",
          text: "百筑别墅|2019款315欧式别墅（支持尺寸修改）已经出售加预定",
          desc: "出售中...",
          isSelect: true,
          count: 1,
          price: "110000"
        }
      ]
    };
  },
  components: {},
  methods: {
    onSubmit() {},
    collect(m){
      this.collectIndex = m;
      this.showw = true;
    },
    collectC() {
      this.showw = false;
    },
    
    collectS() {
    //   this.aryList.splice(this.collectIndex, 1);
      this.showw = false;
      console.log(666);      
    },

    del(n) {
      // this.datalist.splice(n,1);
      // this.sum();
      this.delIndex = n;
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    sure() {
      this.aryList.splice(this.delIndex, 1);
      this.show = false;
    }
  },
  computed: {
    checkAll: {
      get() {
        return this.aryList.every(item => item.isSelect);
      },
      set(val) {
        console.log(val);
        this.aryList.forEach(item => (item.isSelect = val));
      }
    },
    total() {
      return this.aryList
        .filter(item => item.isSelect)
        .reduce((prev, next) => prev + next.count * next.price, 0);
    }
  }
};
</script>
<style lang="less" scoped>
.cartBox {
  width: 100vw;
  height: 50vw;
  .tipBox {
    margin: 10vw 3vw;
  }
  .imgBox {
    width: 30vw;
    height: 30vw;
    background: blue;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .textBox {
    width: 58vw;
    overflow: hidden;
    p {
      width: 90%;
      font-size: 16px;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .desc {
      font-size: 12px;
      color: red;
      margin-left: -36vw;
    }
    .buy {
      margin-top: 9vw;
    }
    .compute {
      margin-top: 8vw;
    }
  }
}
.del {
  margin-right: -30vw;
  margin-top: 4vw;
}
.mask,.mark {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  
}

.mask .panel,.mark .panel {
  width: 50vw;
  min-height: 30vw;
  padding:4vw;
  border:2px solid lightcoral;
  background: #fff;
  margin: auto;
  border-radius: 10px;
  transform: translateY(50vw);
  .panel-title{
      font-size: 50px;
      color:red;
      font-weight:800;    
    }
  .delText{
      color:#333;
      font-size: 16px;
      padding:2vw;
      font-weight: 100;
  }
  .btn,.btns{
    margin:0 5vw; 
    padding:2vw;
    }
}



</style>