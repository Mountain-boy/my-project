<template>
    <div class="meC" :class="{'animated':ifclass,'zoomIn':ifclass}">
        <ul :class="{'animated':ifclass2,'tada':ifclass2}">
            <li v-for="item in contentText">
               {{item[0]}} : <span v-html='item[1]'>{{item[1]}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                ifclass:false,
                ifclass2:false,
                contentText:[
                    ["姓名","郭振山"],
                    ["年龄","23"],
                    ["爱好","摄影，旅游，codding"],
                    ["个人简介","本人<span style='text-decoration:line-through'>性格开朗活泼，大方乐观，踏实真诚，积极进取,</span>略宅，偶尔喜欢逛逛景，拍拍照，对编程有着很强的热爱，乐于钻研，有着21世纪年轻人的共同属性：逗比。很高兴能与你交朋友,有兴趣的可以加我好友"],
                    ["QQ","122996325"],
                    ["WeChat","122996325"],
                    ["tel","15600156580 || 17301392560"]
                ]
            }
        },
        mounted(){
            this.ifclass = true;

            setTimeout(()=>{
                this.ifclass2 = true;
            },1500)
        }
    }
</script>