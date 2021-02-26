// pages/indexa/indexa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current1:'current',
    current2:'',
    blur:'',
    display:'none',
itemBox:[
  {id:1,url:"../../images/body.png",wordEn:"Body",wordCh:"身体",bgColor:"#D4584A"},
  {id:3,url:"../../images/family.png",wordEn:"Family",wordCh:"家庭",bgColor:"#99C455"},
  {id:4,url:"../../images/shape.png",wordEn:"Shapes",wordCh:"形状",bgColor:"#CE4794"},
  {id:5,url:"../../images/color.png",wordEn:"Colors",wordCh:"颜色",bgColor:"#F1BF42"},
  {id:6,url:"../../images/number.png",wordEn:"Numbers",wordCh:"数字",bgColor:"#58B8B3"},
  {id:7,url:"../../images/apple.png",wordEn:"Fruits",wordCh:"水果",bgColor:"#377FF7"},
  {id:8,url:"../../images/bread.png",wordEn:"Food",wordCh:"食物",bgColor:"#8F30AA"},
  {id:9,url:"../../images/chicken.png",wordEn:"Animals",wordCh:"动物",bgColor:"#E38139"},
  {id:10,url:"../../images/coat.png",wordEn:"Clothes",wordCh:"衣物",bgColor:"#5FB257"},
  {id:11,url:"../../images/vegetable.png",wordEn:"Vegetables",wordCh:"蔬菜",bgColor:"#603BAF"},
  {id:2,url:"../../images/run.png",wordEn:"Movements",wordCh:"动作",bgColor:"#FF6600"},
  {id:12,url:"../../images/car.png",wordEn:"Vehicles",wordCh:"交通工具",bgColor:"#9C6A46"},
  {id:13,url:"../../images/happy.png",wordEn:"Feelings",wordCh:"感受",bgColor:"#8A98A2"},
  {id:14,url:"../../images/doctor.png",wordEn:"Occupations",wordCh:"职业",bgColor:"#990066"},
  {id:15,url:"../../images/sun.png",wordEn:"Nature",wordCh:"自然",bgColor:"#003399"},
  {id:16,url:"../../images/toys.png",wordEn:"Toys",wordCh:"玩具",bgColor:"#CC3366"},
  {id:17,url:"../../images/weather.png",WordEn:"Weather",wordCh:"天气",bgColor:"#FF0033"},
  {id:18,url:"../../images/wupin.png",wordEn:"Goods",wordCh:"物品",bgColor:"#FFCC00"},
  {id:19,url:"../../images/location.png",wordEn:"Locations",wordCh:"地点",bgColor:"#FF99cc"},
  {id:20,url:"../../images/xingrong.png",wordEn:"Opposites",wordCh:"反义词",bgColor:"#336699"},
]
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
  onShareAppMessage: function () {

  },
  jumpto: function (ex) {
    let id = ex.currentTarget.dataset.id;
    let bgColor = ex.currentTarget.dataset.bgcolor;
    let current1 = ex.currentTarget.dataset.current;
    if(current1==='current'){
      wx.navigateTo({
        url: '/pages/main/main?id=' + id + '&bgcolor='+ bgColor
      })
    }else{
      wx.navigateTo({
        url: '/pages/test/test?id=' + id + '&bgcolor='+ bgColor
      })
    }
  },
  changeModel: function (ex) {
    let modelId = ex.currentTarget.dataset.id;
    let that=this
    if(modelId==='1'){
that.setData({current1:'current',
  current2:'',
display:'none',
blur:''})
    }else{
      that.setData({current2:'current',
current1:'',
display:'block',
blur:'blur'})
    }
  }

})