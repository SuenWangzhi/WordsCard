// pages/wordslist/wordslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const saveWordslist=wx.getStorageSync("words")
    this.setData({
      wordsList:saveWordslist
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const openid=wx.getStorageSync("openid")
    console.log("my openid:"+openid)
    wx.cloud.callFunction({
      name:'getuserwords'
    }).then(res=>{
      console.log(JSON.stringify(res))
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})