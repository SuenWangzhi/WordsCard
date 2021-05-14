const app = getApp()
const db = wx.cloud.database()
let class1=[]
let class2=[]
Page({
  data: {
    indicatorDots: true,
    interval: 2000,
    duration: 500,
  },
  onLoad: function (options) {
    let typeid=Number(options.id)
    let bgcolor=options.bgcolor
    console.log(typeid)
    db.collection('EngWords').where({
      typeId: typeid
    }).get().then(res => {
      for(let i=0;i<res.data.length;i++){
        class1[i]="z1"
        class2[i]="z2"
      }
      that.setData({
        typeid:typeid,
        background:res.data,
        class1:class1,
        class2:class2,
      })
      
    })
    let that=this
    that.setData({
      bgcolor: bgcolor,
      wordsId:1
    })
   
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  play(e) {
     var tt = e.currentTarget.dataset.id
    // this.audioCtx = wx.createAudioContext(tt)
    // this.audioCtx.seek(0)
    // this.audioCtx.play()
    let audio=wx.createInnerAudioContext()
    audio.src="http://dict.youdao.com/dictvoice?audio="+tt
    audio.play()
    wx.vibrateShort({type:"heavy"})
  },
  audioStart: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.seek(0)
    this.audioCtx.play()
  },
  saveWords(e){
    let wordsid=e.currentTarget.dataset.wordsid
    let openid = wx.getStorageSync('openid')
    console.log(openid+"-----"+wordsid)


    db.collection('UserWords').where({
      _openid:openid,
      wordsid:wordsid
    }).get().then(res => {
      console.log(res.data)
      if(res.data.length==0){
          db.collection('UserWords')
          .add({
            data: {
                wordsid:wordsid
            }    
          })
          .then(res=>{
                wx.showToast({
                  icon: 'success',
                  duration: 1000
            })
            console.log('添加成功',res)
          })
          .catch(res=>{
   console.log('添加失败',res)
      })
      }
    })
  },
  language(e){
    let wordid=e.currentTarget.dataset.wordid
    let index=e.currentTarget.dataset.index
    let word = 'background['+index+'].wordId'
    if(wordid==1){
      this.setData({
        [word]:0
      })
    }else{
      this.setData({
        [word]:1
      })
    }
    
  },
  overturn(e){
    let wordid=e.currentTarget.dataset.index
    let that=this
    if (class1[wordid]==="z1") {
      class1[wordid]="front"
      class2[wordid]="back"
      that.setData({
        class1: class1,
        class2: class2
       })
       setTimeout(function() {
        class1[wordid]="z2"
        class2[wordid]="z1"
        that.setData({
         class1: class1,
         class2: class2,
        })
       }, 1000);
     } else {
      class1[wordid]="back"
      class2[wordid]="front"
      that.setData({
        class1: class1,
        class2: class2
       })
       setTimeout(function() {
        class1[wordid]="z1"
        class2[wordid]="z2"
        that.setData({
         class1: class1,
         class2: class2,
        })
       }, 1000);
     }
    }
  
})