<template>
  <div></div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  beforeCreate() {
    window.addEventListener("unload", () => {
      localStorage.clear();
    });
  },
  created() {
    window.addEventListener("unload", () => {
      localStorage.clear();
    });
  },
  mounted() {
    window.addEventListener("load", function() {
      document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });
      document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
      });
    });
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });
  },
  beforeDestroy() {
    window.addEventListener("unload", () => {
      localStorage.clear();
    });
  }
};
</script>
<style lang="less">
</style>