<template>
    <ul v-show='isShowing' class="head_list animated" :class="{'rotateIn':isShowing}">
            <router-link to='/home' tag='li'>首页</router-link>
            <router-link to='' tag='li'>音乐?</router-link>
            <router-link to='/picture' tag='li'>图片?</router-link>
            <li>
                <a href="http://blog.qwqshan.xin">blog</a>
            </li>
        </ul>
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