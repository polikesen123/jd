<template>
    <div class="myheader">
        <span class="lt" @click='toHome'>&lt</span>
        <span class="rt">...</span>
        <h2>购物车</h2>
        
        <van-notice-bar text="记得清空你的购物车记得清空你的购物车哦记得清空你的购物车哦哦" left-icon="volume-o">
        </van-notice-bar>
        <span class="edit rt">编辑商品</span>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'myheader',
    data() {
        return {
           
        }
    },
    methods: {
        toHome() {
            this.$router.back()
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
.myheader{
    margin: 2vw 0; 
    font-size: 18px;
    >span:nth-child(1){        
        font-weight: 1000;
        margin-left:5vw;
    }
    >span:nth-child(2){
        margin-right:5vw;
        font-weight: 1000;
    }
    .edit{
        font-size: 14px;
        width: 100%;
        height: 10vw;
        line-height: 10vw;
        text-align: right;
        padding-right:4vw;
        border-bottom: 1px solid #eee;
    }
}
</style>