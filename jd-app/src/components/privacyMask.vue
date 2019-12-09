<template>
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
      <div class="block">
        <van-panel title="注册协议及隐私政策" desc="在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，">
          <div>
            点击同意即表示您已阅读并同意
            <span>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：《京东用户注册协议》,并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于《订单共享与安全》</span>
          </div>
          <div slot="footer">
            <van-button size="small" @click="disagreeBtn">不同意</van-button>
            <van-button size="small" type="danger" @click="agreeBtn">同意</van-button>
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
  components: {},
  methods: {
    disagreeBtn(val) {
      val = false;
      this.$emit("getMaskData", val);
    },
    agreeBtn(val) {
      val = false;
      this.$emit("getMaskData", val);
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.van-cell__title,
.van-cell__label,
.van-panel__content {
  font-size: 4vw;
}
.block {
  width: 80vw;
  height: 90vw;
  background-color: #fff;
  padding: 4vw;
}
.van-panel__footer {
  margin-top: 5vw;
  button {
    // margin: 0 2vw;
    width: 30vw;
  }
}
</style>