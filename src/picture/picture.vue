<template>
    <div id="wrapper">
        <!-- <scroller  lock-x  @on-scroll="onScroll" height='-46' use-pulldown='true' ref="scrollerEvent">
            <div v-for="img in pList">
                <img v-lazy.page="img.work.image_urls.px_480mw" width='100%' height='300px'>
            </div>
        </scroller> -->
        <scroller lock-x height='46' ref='scroller' :pulldown-config='pulldownConfig' @on-scroll='onScroll' :use-pulldown='true' :use-pullup='true'>
            <p v-for='i in 30'>
                {{i}}
            </p>
        </scroller>
        <gzs_head :text='text'></gzs_head>
        <p-more v-show= 'false'></p-more>
    </div>
</template>
<script>
    import gzs_head from '@/components/header.vue';
    import PMore from '@/components/loadmore.vue';
    import BScroll from 'better-scroll'
    import { Scroller } from 'vux'
    export default{
        data(){
            return {
                text:'图片',
                pList:[],
                loadMorP:{

                },
                scroll:null,
                scrollTop:0,
                pulldownConfig:{
                    content: '',
                    height: 46,
                    autoRefresh: false,
                    downContent: '在拉就要刷新咯',
                    upContent: '',
                    loadingContent: '加载中...',
                    clsPrefix: 'xs-plugin-pulldown-'
                }
            }
        },
        components:{
            gzs_head,
            PMore,
            Scroller
        },
        methods:{
            onScroll(pos){
                this.scrollTop = pos.top
                console.log(this.scrollTop)

            }
        },
        mounted(){
            this.scroll = null;
            this.$http('https://api.imjad.cn/pixiv/v1/?type=rank').then((d)=>{
                this.pList = d.data.response[0].works
                console.log(this.pList)
                // this.$nextTick(() => {
                //    this.$refs.scroller.reset({
                //       top: 0
                //   })
                // })
            })

            // scroll = new BScroll(document.getElementById('wrapper'), {
            //     startX: 0,
            //     startY: 0,
            //     click: true,
            //     momentum: true,
            //     probeType: 2
            // })
        }
    }
</script>
<style>
    #wrapper{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
    }
    .xs-container{
        padding-top:46px;
    }
    .xs-plugin-pulldown-container{
        top:0 !important;
    }
</style>