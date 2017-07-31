<template>
  <div>
    <load-more :tip="'加载完成'"></load-more>
    <load-more :show-loading="true" :tip="'暂无数据'" background-color="#fbf9fe"></load-more>
    <load-more :show-loading='false' :tip="'↓加载更多'" background-color="#fbf9fe"></load-more>
  </div>
</template>
<script>
import { LoadMore } from 'vux'

export default {
  components: {
    LoadMore
  }
}
</script>