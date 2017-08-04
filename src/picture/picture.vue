<template>
    <div>
        <gzs_head :text='text'></gzs_head>
        <div>
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul class="p_list">
                  <li v-for="item in pList">
                        <img v-lazy="item.work.image_urls.px_480mw" width='100%'>
                  </li>
                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>
<script>
    import gzs_head from '@/components/header.vue';

    export default{
        data(){
            return {
                text:'图片',
                pList:[],
                allLoaded: false,
                page:1,
                opc:false
            }
        },
        components:{
            gzs_head
        },
        methods:{
            loadTop(){
                this.$http('https://api.imjad.cn/pixiv/v1/?type=rank&content=illust&page='+this.page).then((d)=>{
                    this.page = d.data.pagination.next
                    this.pList = d.data.response[0].works.concat(this.pList)
                })
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom(){

            }
        },
        mounted(){
            this.$http('https://api.imjad.cn/pixiv/v1/?type=rank&content=illust&page='+this.page).then((d)=>{
                this.page = d.data.pagination.next
                this.pList = d.data.response[0].works
                console.log(this.pList)
            })

        }
    }
</script>
<style>
    .mint-loadmore-top{
        height:46px !important;
        line-height:46px !important;
        margin-top:0 !important;
        color:rgba(255, 255, 0, .5);
    }
</style>