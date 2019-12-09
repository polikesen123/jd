<template>
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
      <div class="block">
        <van-panel title="注册协议及隐私政策" desc="京东注册登录隐私...." >
          <div>巴拉巴拉拉吧巴拉巴拉吧啦巴拉巴拉</div>
          <div slot="footer">
            <van-button size="small">不同意</van-button>
            <van-button size="small" type="danger">同意</van-button>
          </div>
        </van-panel>
      </div>
    </div>
  </van-overlay>
</template>
<script>
// @ is an alias to /src
export default {
  name: "pMask",
  data() {
    return {};
  },
  props: ["show"],
  components: {}
};
</script>
<style lang="less">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>