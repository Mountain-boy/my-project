<template>
  <div style="height:100%;">
    <gzs_head :text='text'></gzs_head>
    <gzs_aboutc></gzs_aboutc>
    <gzs_foot></gzs_foot>
  </div>
</template>

<script>
import gzs_head from '@/components/header.vue'
import gzs_foot from '@/components/navbar.vue'
import gzs_aboutc from '@/about/aboutContent.vue'
export default {
  components: {
    gzs_head,
    gzs_foot,
    gzs_aboutc
  },
  data () {
    return {
      text:'关于我'
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style>
  dl{
    display:flex;
    padding-top:46px;
  }
</style>