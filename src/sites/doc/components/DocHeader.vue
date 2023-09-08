<template>
  <div class="doc-header">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RefData } from '@/sites/assets/util/ref';
import { Github } from '@cubfe/icons-vue'
const toHome = () => {
  RefData.getInstance().currentRoute.value = '/';
};
</script>

<style lang="scss">
.doc-header {
  height: $doc-header-height;
  line-height: $doc-header-height;
  padding: 0 20px;
  font-size: 20px;
  border-bottom: 1px solid #eee;

  .header {
    &-logo {
      .logo-link {
        background: url('../../assets/images/logo.png') no-repeat center/100%;
      }

      .logo-border {
        background: $theme-black-border;
      }
    }
  }
}

.header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 64px;

    .logo-link {
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;
    }

    .logo-border {
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
  }

  &-nav {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    float: right;
    width: calc(100% - 240px);
    min-width: 900px;
    padding-left: 40px;

    .search-box {
      position: relative;
      min-width: 300px;
      height: 35px;
      line-height: 35px;

      .search-input {
        width: 100%;
        height: 35px;
        padding-left: 10px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

      .search-list {
        background: #fff;
        position: absolute;
        width: 300px;
        list-style: none;
        border: 1px solid #f2f2f2;
        z-index: 99999;
        top: 27px;
        padding: 0;
      }
    }

    .nav-box {
      .nav-list {
        position: relative;
        min-width: 490px;
        display: flex;
        list-style: none;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        .nav-item {
          position: relative;
          margin-right: 30px;
          font-size: 14px;
          height: 63px;
          line-height: 63px;
          text-align: center;
          cursor: pointer;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          .user-link {
            margin-top: 2px;
            width: 26px;
            height: 26px;
            line-height: 26px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}

// 颜色</style>
