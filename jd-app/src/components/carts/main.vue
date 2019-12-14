<template>

  <div class="mymain" v-if="ppp">
     <span class="shwww">共{{obj[0].num}}件商品</span>
    <div class="cartBox" v-for="(item,index) in obj" :key="index">
      <van-checkbox class="lt tipBox" @click="exchange" v-model="item.isSelect"></van-checkbox>
      <div class="lt imgBox">
        <img :src="item.img" />
      </div>
      <div class="rt textBox">
        <p>{{item.dess}}</p>
        <span class="desc">{{item.ms}}</span>
        <span class="buy lt">￥{{item.many}}</span>
        <!-- <van-stepper class="compute rt" v-model="item.count"></van-stepper> -->
      </div>
      <!-- 收藏 删除按钮 -->

      <van-button class="collect" size="mini" @click="collect  (index)">收藏</van-button>
      <van-button class="del" size="mini" @click="del(index)">删除</van-button>

      
      <!-- 结算功能 -->
      <van-submit-bar v-model="item.total" button-text="去结算" @submit="onSubmit">
        <van-checkbox v-model="checkAll">全选</van-checkbox>
        <h3>￥{{aaa}}</h3>
        <span slot="tip">
          <!-- <span>修改地址</span> -->
        </span>
      </van-submit-bar>
    </div>
    <!-- 判断是否删除 -->
    <div class="mask" v-show="show">
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title">
            <van-icon name="warning-o" />
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
          <h3 class="panel-title">
            <van-icon name="warning-o" />
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
import { main } from "@/api/carts.js";
import { mapState } from 'vuex';
export default {
  name: "XXX",
  data() {
    return {
      value:'',
      delIndex: null,
      collectIndex: null,
      show: false,
      showw: false,
      aryList:[],
      count:1,
      ary:[],
      obj:{},
      isSelect:false,
      aaa:'',
      ppp:''
    };
  },
  components: {},
  created() {
    this.getMainData();   
  },
  methods: {
    onSubmit() {},
    getMainData() {   
      // this.aaa = this.obj.many*this.obj.num
      // this.aaa = (this.obj[0].many)*(this.obj[0].num)
      // console.log(this.obj.many)
      // console.log(this.obj.num)
      this.obj = this.$route.query.a
      if(this.obj[0].num&&this.obj[0].num>0){
        console.log(this.obj[0].num)
        this.ppp = true
      }else{
        console.log(this.obj[0].num)
        this.ppp = false
      }
      // console.log(this.qqq)
      this.aaa = this.obj[0].many*this.obj[0].num

      // this.obj = this.obj ? this.obj : this.aryList;

      console.log(this.aaa)
      // console.log(this.obj)
      // console.log(this.obj[0].many)
      // console.log(this.obj[0].num)
    },
    exchange(){
      this.isSelect = !this.isSelect
    },
    collect(m) {
      this.collectIndex = m;
      this.showw = true;
    },
    collectC() {
      this.showw = false;
    },

    collectS() {
      this.aryList.splice(this.collectIndex, 1);
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
    // ...mapState(['jdGoods']),
    // ...mapState(["commod"]),
    arr(){
      return this.ary.push(this.arr)
    },
    checkAll: {
      get() {
        return this.aryList.every(item => item.isSelect);
        console.log(666)
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
.mask,
.mark {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.mask .panel,
.mark .panel {
  width: 50vw;
  min-height: 30vw;
  padding: 4vw;
  border: 2px solid lightcoral;
  background: #fff;
  margin: auto;
  border-radius: 10px;
  transform: translateY(50vw);
  .panel-title {
    font-size: 50px;
    color: red;
    font-weight: 800;
  }
  .delText {
    color: #333;
    font-size: 16px;
    padding: 2vw;
    font-weight: 100;
  }
  .btn,
  .btns {
    margin: 0 5vw;
    padding: 2vw;
  }
}
.shwww{
  display: inline-block;
  color: rgb(204, 34, 34);
  transform: translateY(-10vw);
  border: 1px solid red;
}
</style>