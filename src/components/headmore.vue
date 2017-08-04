<template>
    <transition name="fade">
        <ul v-show="isShowing" class="head_list">
            <router-link to='' tag='li'>想听音乐？</router-link>
            <router-link to='/picture' tag='li'>想看图片？</router-link>
            <li>
                <a href="http://blog.qwqshan.xin">我的博客</a>
            </li>
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