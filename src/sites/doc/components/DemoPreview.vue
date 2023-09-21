<template>
  <div class="doc-demo-preview">
    <iframe :src="url" frameborder="0"></iframe>
    <div class="volume-plus"></div>
    <div class="volume-minus"></div>
    <div class="off-btn"></div>
    <div class="home-btn"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  url: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss">
.doc-demo-preview {
  position: fixed;
  top: 55%;
  z-index: 99;
  height: calc(100vh - 100px);
  max-height: 800px;
  width: 375px;
  right: 30px;
  box-shadow: #413f3f 0 4px 12px;
  border-radius: 50px;
  transform: translateY(-50%);
  // overflow: hidden;
  border: solid 10px #000;
  iframe {
    height: 100%;
    width: 100%;
    border-radius: 40px;
    overflow: hidden;
  }
  .volume-plus {
    position: absolute;
    left: -15px;
    top: 160px;
    width: 5px;
    height: 60px;
    background: black;
    border-radius: 5px 0 0 5px;
  }
  .volume-minus {
    position: absolute;
    left: -15px;
    top: 225px;
    width: 5px;
    height: 60px;
    background: black;
    border-radius: 5px 0 0 5px;
  }
  .off-btn {
    position: absolute;
    right: -15px;
    top: 180px;
    width: 5px;
    height: 100px;
    background: black;
    border-radius: 0 5px 5px 0;
  }
  .home-btn {
    position: absolute;
    bottom: 10px;
    width: 160px;
    height: 5px;
    background: #0000004a;
    left: 50%;
    border-radius: 5px;
    transform: translateX(-50%);
  }
  .camera {
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    left: 50%;
    background: black;
    transform: translateX(-50%);
  }
}
</style>
