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
  let a={word:resdata[Number(wordsarr[i])].wordsdetail,istrue:1}
      let b={word:resdata[Number(wordsarr[i]+2)%wordsarr.length].wordsdetail,istrue:0}
      let c={word:resdata[Number(wordsarr[i]+4)%wordsarr.length].wordsdetail,istrue:0}
      let d={word:resdata[Number(wordsarr[i]+6)%wordsarr.length].wordsdetail,istrue:0}
      let shunxu=[0,1,2,3]
      shunxu=returnArr(shunxu)
      wordslist[shunxu[0]]=a
      wordslist[shunxu[1]]=b
      wordslist[shunxu[2]]=c
      wordslist[shunxu[3]]=d
      console.log(resdata[Number(wordsarr[i])].wordsdetail[0].wordEn)
      that.setData({
        wordslist:wordslist,
        wordEn:resdata[Number(wordsarr[i])].wordsdetail,
        wordindex:i+1
      })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display:'none',
    showDialog: false
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that =this; 
    const openid=wx.getStorageSync("openid")
    console.log("my openid:"+openid)
    wx.cloud.callFunction({
      name:'getuserwords'
    }).then(res=>{
      resdata=res.result.list
      for(let i=0;i<resdata.length;i++){
        wordsarr.push(i)
      }
      wordsarr=returnArr(wordsarr)
      console.log(resdata)
      console.log(wordsarr)
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
          console.log("全部回答w完成")
          that.setData({
            showDialog: !that.data.showDialog
          });
        }
       }, 2200);
      
    }else{
      wx.vibrateLong({type:"heavy"})
      console.log("错误")
    }
  },
  onUnload(){
    that =null;   //记得释放
}
})