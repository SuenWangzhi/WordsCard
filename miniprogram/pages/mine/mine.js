// pages/mine/mine.js
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  praiseImg: function () {
    wx.previewImage({
      urls: ['cloud://words-1gj5wb0dc070a2cf.776f-words-1gj5wb0dc070a2cf-1304851963/erweima.jpg'],
      current: 'cloud://words-1gj5wb0dc070a2cf.776f-words-1gj5wb0dc070a2cf-1304851963/erweima.jpg' // 当前显示图片的http链接      
    })
  },
  goWords:function(ex){
    console.log("aaaa")
    let url = ex.currentTarget.dataset.url;
    wx.navigateTo({
      url: '/pages/'+url+'/'+url
    })
  }
})