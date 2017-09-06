<template>
<div>
  <tabbar>
    <tabbar-item link="/home">
      <img slot="icon" src="../assets/img/home.png" height="48" width="48">
      <span slot="label">主页</span>
    </tabbar-item>
    <tabbar-item link="/project">
      <img slot="icon" src="../assets/img/project.png" height="48" width="48">
      <span slot="label">进去看看</span>
    </tabbar-item>
    <tabbar-item link="/about">
      <img slot="icon" src="../assets/img/about.png" height="48" width="48">
      <span slot="label">我</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  Group,
  Cell
} from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
