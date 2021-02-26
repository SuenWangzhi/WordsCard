const app = getApp()
Page({
  data: {
    indicatorDots: true,
    interval: 2000,
    duration: 500,
  },
  onLoad: function (options) {
    let id=options.id
    let bgcolor=options.bgcolor
    console.log(bgcolor)
    let that=this
    that.setData({
      bgcolor: bgcolor,
      wordsId:id
 })
    if(id==="1"){
      that.setData({
        background: [
          "arms","ear","eye","eyes","feet",
          "foot","hand","head","knees","mouth",
          "nose","shoulders","teeth","ears","eyebrow",
          "face","finger","hair","hands","heart",
          "legs","neck","paws","tail","toes"
        ]
      });
    }else if(id==="2"){
      that.setData({
        background: [
          "bird","fish","rabbit","cat","dog",
          "duck","cow","goat","monkey","fox",
          "panda","tiger","lion","elephant"
        ]
    });
    }else if(id==="3"){
      that.setData({
        background: [
          "dad","daddy","father",
          "mom","mommy","mother",
          "grandma","grandpa",
          "grandfather","grandmother",
          "uncle","aunt",
          "brother","sister"
       ]
     });
    }else if(id==="4"){
      that.setData({
        background: [
          "shapes",
          "square","rectangle","circle","triangle",
          "heart","star","oval","diamond"
       ]
     });
    }else if(id==="5"){
      that.setData({
        background: [
        "red","orange","yellow","green","brown","blue","purple","pink","black","white"
       ]
     });
    }else if(id==="6"){
      that.setData({
        background: [
          "zero","one","two","three","four","five",
          "six","seven","eight","nine","ten","eleven","twelve",
          "thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen",
          "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred","thousand"
       ]
     });
    }else if(id==="7"){
      that.setData({
        background: [
          "fruit","apple","cherry","kiwi","mango","peach","pineapple","strawberry","banana","grapes","lemon","orange","pear","plum","watermelon"
       ]
     });
    }else if(id==="8"){
      that.setData({
        background: [
          "bread","milk","popcorn","tofu","cake","egg","noodle","rice","chicken","fish","peanuts","sandwich","cookie","ice cream","'pizza","solad"
       ]
     });
    }else if(id==="9"){
      that.setData({
        background: [
          "ant","cat","crab","dog","elephant","fox","goat","lion","panda","rabbit","squirrel","yak","bird","cow","crocodile","duck","fish","frog","gorilla","monkey","parrot","sheep","tiger","zebra"
       ]
     });
    }else if(id==="10"){
      that.setData({
        background: [
          "boots","cap","coat","desktop.inidress","hat","jacket","jeans","mittens","pants","shirt","shoes","socks","T-shirt"
       ]
     });
    }else if(id==="11"){
      that.setData({
        background: [
          "vegetable","beans","cucumber","lettuce","pea","spinach","broccoli","eggplant","maize","pepper","taro","cabbage","garlic","mushroom","potato","tomato","carrot","ginger","onion","pumpkin"
       ]
     });
    }else if(id==="12"){
      that.setData({
        background: [
          "apple","cake","ice-cream","look","paint",
          "bottle","candies","egg","juice","monkey",
          "bread","cookies","hungry","orange"
       ]
     });
    }else if(id==="13"){
      that.setData({
        background: [
          "apple","cake","ice-cream","look","paint",
          "bottle","candies","egg","juice","monkey",
          "bread","cookies","hungry","orange"
       ]
     });
    }else if(id==="14"){
      that.setData({
        background: [
          "cook","farmer","pilots","taxidriver","dentists","firefighters","policeofficer","teacher","doctor","nurse","salesclerks","engineers","officeworkers","student"
       ]
     });
    }else if(id==="15"){
      that.setData({
        background: [
          "cloud","flower","moon","rock","snowflake","tree","desktop.inileaf","rain","sky","sun"
       ]
     });
    }else if(id==="16"){
      that.setData({
        background: [
          "apple","cake","ice-cream","look","paint",
          "bottle","candies","egg","juice","monkey",
          "bread","cookies","hungry","orange"
       ]
     });
    }else if(id==="17"){
      that.setData({
        background: [
          "breezy","cool","humid","stormy","windy","chilly","foggy","rainy","sunny","cloudy","hot","snowy","warm"
       ]
     });
    }else if(id==="18"){
      that.setData({
        background: [
          "apple","cake","ice-cream","look","paint",
          "bottle","candies","egg","juice","monkey",
          "bread","cookies","hungry","orange"
       ]
     });
    }else if(id==="19"){
      that.setData({
        background: [
          "apple","cake","ice-cream","look","paint",
          "bottle","candies","egg","juice","monkey",
          "bread","cookies","hungry","orange"
       ]
     });
    }else if(id==="20"){
      that.setData({
        background: [
          "small","big","short","long","light","heavy","new","old"
       ]
     });
    }
    // wx.cloud.callFunction({
    //   name: 'getdb',
    //   data: {
    //     id:id
    //   },
    //   success: res => {
    //     console.log("return:"+res.data)
    //     that.setData({
    //      // background: res.result.word
    //     });
    //   },
    //   fail: err => {
    //     console.log('调用失败', err)
    //   }
    // })

  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  play(e) {
    var tt = e.currentTarget.dataset.id
    this.audioCtx = wx.createAudioContext(tt)
    this.audioCtx.seek(0)
    this.audioCtx.play()
  },
  audioStart: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.seek(0)
    this.audioCtx.play()
  },
})