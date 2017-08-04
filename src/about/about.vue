<template>
  <div>
    <gzs_head :text='text'></gzs_head>
    <canvas ref='mycanvas'></canvas>
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
      text:'关于我',
      width: window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth,
      height:window.innerHeight-99 || document.body.clientHeight-99 || document.documentElement.clientHeight-99,
      canvas: null,
      ctx:null,
      timer:null,
      contentText:[
        {
          type:'name',
          title:'姓名',
          value:'郭振山'
        },
        {
          type:'age',
          title:'年龄',
          value:'23'
        },
        {
          type:'hobby',
          title:'爱好',
          value:'摄影，旅游，codding'
        },
        {
          type:'info',
          title:'个人简介',
          value:'本人^性格开朗活泼，大方乐观，踏实真诚，积极进取&宅、宅、宅，偶尔喜欢逛逛景，拍拍照，对编程有着很强的热爱，乐于钻研，有着21世纪年轻人的共同属性：逗比。很高兴能与你交朋友有兴趣的可以加我好友'
        },
        {
          type:'QQ',
          title:'QQ',
          value:'122996325'
        },
        {
          type:'WeChat',
          title:'WeChat',
          value:'122996325'
        },
        {
          type:'tel',
          title:'tel',
          value:'17301392560||1560156580'
        }
      ]
    }
  },
  mounted(){
    this.canvas = this.$refs.mycanvas;
    this.ctx = this.canvas.getContext("2d");
    this.init(this.canvas,this.ctx)
    for (var i = 0,len = this.contentText.length; i<len; i++) {
      if(!this.timer){
        this.draw(this.ctx,this.contentText[3].value)
      }
    };
  },
  methods:{
    init(cav,ctx){
      cav.width = this.width;
      cav.height = this.height;
      ctx.font = 'bold 20px consolas';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillStyle = '#5632F8';
    },
    draw(ctx,text){
      let i= 0;
      let x = 0;
      let y = 0;
      this.timer = setInterval(()=>{
        if(text[i]==undefined) return;
        if(x>=(this.width-44)){
          x = 0;
          y +=22;
       }else{
          x +=22;
          y = y;
        }
        ctx.fillText(text[i],x,y)
        i++;
        console.log(this.timer);
      },100)
    }
  }
}
</script>

<style>
  canvas{
    margin-top:46px;
  }
</style>