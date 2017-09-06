<template>
  <div class="head">
    <x-header>
      <span>{{text}}</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"   @touchend="headMore"></x-icon>
    </x-header>
    <head-more :isShowing='showMenus'></head-more>
  </div>
</template>

<script>
import { XHeader,TransferDom } from 'vux'
import headMore from './headmore.vue'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    headMore
  },
  props: ['text'],
  data () {
    return {
      showMenus: false
    }
  },
  methods:{
      headMore(){
          this.showMenus = !this.showMenus
      }
  }
}
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
.vux-header{
  background-color:rgba(255, 240, 85, 0.91) !important;
}
</style>