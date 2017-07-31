<template>
  <div>
    <gzs_head :text='text'></gzs_head>
    <gzs_foot></gzs_foot>
  </div>
</template>

<script>
import gzs_head from '@/components/header.vue'
import gzs_foot from '@/components/navbar.vue'
export default {
  components: {
    gzs_head,
    gzs_foot
  },
  data () {
    return {
      text:'关于我'
    }
  }
}
</script>

<style>

</style>