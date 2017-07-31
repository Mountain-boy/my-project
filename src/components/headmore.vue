<template>
    <transition name="fade">
        <ul v-show="isShowing" class="head_list">
            <router-link to='' tag='li'>想听音乐？</router-link>
            <router-link to='/picture' tag='li'>想看图片？</router-link>
            <li>123</li>
            <li>123</li>
            <li>123</li>
        </ul>
    </transition>
</template>
<script>
     export default{
        props:['isShowing'],
        data(){
            return {

            }
        }
     }
</script>