<template>
  <div style="margin-top:-5px;">
    <lqb-card class="saler-info">
       <span slot="header">
         商家基本信息：
       </span>
       <div>
         <div class="ys-row">
              <div class="span4">
                  <label><span>张三：</span><input  /></label>
              </div>
              <div class="span8">
                  <label><span>手机号码：</span><input  /></label>
              </div>
         </div>
          <div class="ys-row">
              <div class="span4">
                  <label><span>张三：</span><input  /></label>
              </div>
              <div class="span8">
                  <label><span>手机号码：</span><input  /></label>
              </div>
         </div>
       </div>
    </lqb-card>
    <lqb-card style="margin-top:10px">
       <span slot="header">
         商家二维码：
       </span>
       <div>
         <div class="lqb-row">
              <div class="">
                  <img  />
              </div>

         </div>

       </div>
    </lqb-card>
  </div>
</template>
<script>

  import YButton from '/components/YButton'
  import { upload, updateheadimage } from '/api/index'
  import YShelf from '/components/shelf'
  import vueCropper from 'vue-cropper'
  import { mapState, mapMutations } from 'vuex'
  export default {
    mounted(){

    },
    data () {
      return {
        imgSrc: '',
        editAvatarShow: false,
        cropContext: '',
        cropperImg: '',
        previews: {},
        option: {
          img: '',
          zoom: 0
        },
        fixedNumber: [1, 1],
        example2: {
          info: true,
          size: 1,
          canScale: false,
          autoCrop: true,
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 300,
          autoCropHeight: 250,
          // 开启宽度和高度比例
          fixed: true
        }
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapMutations([
        'RECORD_USERINFO'
      ]),
      upimg (e) {
        var file = e.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          this.option.img = e.target.result
        }
      },
      cropper () {
        if (this.option.img) {
          this.$refs.cropper.getCropData((data) => {
            this.imgSrc = data
            upload({imgData: data}).then(res => {
              if (res.status === '0') {
                let path = res.result.path
                updateheadimage({imageSrc: path}).then(res1 => {
                  if (res1.status === '0') {
                    let info = this.userInfo
                    info.avatar = path
                    this.RECORD_USERINFO({info: info})
                    alert('更换成功')
                    this.editAvatarShow = false
                  }
                })
              }
            })
          })
        } else {
          alert('别玩我啊 先选照骗')
        }
      },
      editAvatar () {
        this.editAvatarShow = true
      },
      realTime (data) {
        this.previews = data
        let w = 100 / data.w
        this.option.zoom = w
      }
    },
    components: {
      YButton,
      YShelf,
      vueCropper
    }
  }
</script>
<style lang="scss" scoped>
  
  .ys-row{
    &::after{
      content: " ";
      height: 0px;
      display: block;
      overflow: hidden;
      clear: both;
    }
    .span4{
        width: 4/12%;
        float: left;
    }
    .span8{
        width: 8/12%;
        float: left;
    }
  }
</style>
