// pages/test/test.js
let that =null;
const db = wx.cloud.database()
let wordsarr=[]
let wordslist=[]
let resdata=[]
function returnArr(input) {
  for (var i = input.length-1; i >=0; i--) { 
    var randomIndex = Math.floor(Math.random()*(i+1)); 
    var itemAtIndex = input[randomIndex]; 
    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex; 
   } 
   return input; 
}
function wordstest(i) {
  let a={word:resdata[Number(wordsarr[i])],istrue:1}
      let b={word:resdata[Number(wordsarr[i]+2)%wordsarr.length],istrue:0}
      let c={word:resdata[Number(wordsarr[i]+4)%wordsarr.length],istrue:0}
      let d={word:resdata[Number(wordsarr[i]+6)%wordsarr.length],istrue:0}
      let shunxu=[0,1,2,3]
      shunxu=returnArr(shunxu)
      wordslist[shunxu[0]]=a
      wordslist[shunxu[1]]=b
      wordslist[shunxu[2]]=c
      wordslist[shunxu[3]]=d
      console.log(resdata[Number(wordsarr[i])])
      that.setData({
        wordslist:wordslist,
        wordEn:resdata[Number(wordsarr[i])],
        wordindex:i+1
      })
}
Page({
  data: {
      display:'none',
      showDialog: false,
      truetime:[],

  },

  onLoad: function (options) {
    that =this; 
    let typeid=Number(options.id)
    let bgcolor=options.bgcolor
    that.setData({
      bgcolor:bgcolor
    })
    db.collection('EngWords').where({
      typeId: typeid
    }).get().then(res => {
      resdata=res.data
      that.setData({
        datalength:resdata.length
      })
      for(let i=0;i<resdata.length;i++){
        wordsarr.push(i)
      }
      wordsarr=returnArr(wordsarr)
      wordstest(0)
    })

    
  },

  selected(ex){
    let istrue = ex.currentTarget.dataset.istrue;
    let wordindex = ex.currentTarget.dataset.wordindex;
    let that=this
    let animation = wx.createAnimation({
      duration: 2200,
      timingFunction: 'ease',
      delay: 0
    });
    console.log(wordindex)
    if(istrue==1){
      wx.vibrateShort({type:"heavy"})
      that.setData({
        display:"block"
      })
      console.log("正确//长度"+wordsarr.length)
      animation.translate(0, -100).step()
      that.setData({
        ani1:  animation.export()
      })
      setTimeout(function() {
        animation.translate(0, 0).step()
        that.setData({
          display:"none",
          ani1: animation.export()
        })  
        if(wordindex!=wordsarr.length){
          wordstest(Number(wordindex))
        }else{
          let falsetime=0
          for(let i=0;i<that.data.datalength;i++){
            if(that.data.truetime[i]==1){
              falsetime=falsetime+1
            }
          }
          console.log("全部回答w完成;错误次数："+falsetime)
          let cuowulv=falsetime*10/that.data.datalength
          if(cuowulv<3){
            that.setData({
              star: "threestars"
            });
          }else if(cuowulv<5){
            that.setData({
              star: "twostars"
            });
          }else{
            that.setData({
              star: "onestar"
            });
          }
          that.setData({
            showDialog: !that.data.showDialog
          });
        }
       }, 2200);
      
    }else{
      wx.vibrateLong({type:"heavy"})
      that.data.truetime[wordindex]=1
      console.log(that.data.truetime)
    }
  },
  onUnload(){
    that =null;   //记得释放
},
returnback(){
  wx.navigateBack({
    success: function () {
      beforePage.onLoad(); // 执行前一个页面的onLoad方法
    }
  });
}
})