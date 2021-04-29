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
          {wordId:1,wordEn:"head",wordCh:"头"},
          {wordId:1,wordEn:"hair",wordCh:"头发"},
          {wordId:1,wordEn:"face",wordCh:"脸"},
          {wordId:1,wordEn:"eyebrow",wordCh:"眉毛"},
          {wordId:1,wordEn:"eyes",wordCh:"眼睛"},
          {wordId:1,wordEn:"nose",wordCh:"鼻子"},
          {wordId:1,wordEn:"mouth",wordCh:"嘴"},
          {wordId:1,wordEn:"teeth",wordCh:"牙齿"},
          {wordId:1,wordEn:"ears",wordCh:"耳朵"},
          {wordId:1,wordEn:"neck",wordCh:"脖子"},
          {wordId:1,wordEn:"shoulders",wordCh:"肩膀"},
          {wordId:1,wordEn:"arms",wordCh:"手臂"},
          {wordId:1,wordEn:"hands",wordCh:"手"},
          {wordId:1,wordEn:"finger",wordCh:"手指"},
          {wordId:1,wordEn:"heart",wordCh:"心"},
          {wordId:1,wordEn:"legs",wordCh:"腿"},
          {wordId:1,wordEn:"knees",wordCh:"膝盖"},
          {wordId:1,wordEn:"feet",wordCh:"脚"},
          {wordId:1,wordEn:"toes",wordCh:"脚趾头"},
          {wordId:1,wordEn:"paws",wordCh:"爪子"},
          {wordId:1,wordEn:"tail",wordCh:"尾巴"}
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
          {wordId:1,wordEn:"daddy",wordCh:"爸爸"},
          {wordId:1,wordEn:"mommy",wordCh:"妈妈"},
           {wordId:1,wordEn:"grandma",wordCh:"奶奶"},
          {wordId:1,wordEn:"grandpa",wordCh:"爷爷"},  
           {wordId:1,wordEn:"uncle",wordCh:"叔叔"},
           {wordId:1,wordEn:"aunt",wordCh:"阿姨"},
            {wordId:1,wordEn:"brother",wordCh:"兄弟"},
          {wordId:1,wordCh:"sister",wordCh:"姐妹"}

       ]
     });
    }else if(id==="4"){
      that.setData({
        background: [
          {wordId:1,wordEn:"shapes",wordCh:"形状"},
          {wordId:1,wordEn:"square",wordCh:"正方形"},
          {wordId:1,wordEn:"rectangle",wordCh:"长方形"},
          {wordId:1,wordEn:"circle",wordCh:"圆形"},
          {wordId:1,wordEn:"triangle",wordCh:"三角形"},
          {wordId:1,wordEn:"heart",wordCh:"心形"},
          {wordId:1,wordEn:"star",wordCh:"星形"},
          {wordId:1,wordEn:"oval",wordCh:"椭圆形"},
          {wordId:1,wordEn:"diamond",wordCh:"菱形"}
       ]
     });
    }else if(id==="5"){
      that.setData({
        background: [
          {wordId:1,wordEn:"red",wordCh:"红色"},
          {wordId:1,wordEn:"orange",wordCh:"橙色"},
          {wordId:1,wordEn:"yellow",wordCh:"黄色"},
          {wordId:1,wordEn:"green",wordCh:"绿色"},
          {wordId:1,wordEn:"brown",wordCh:"青色"},
          {wordId:1,wordEn:"blue",wordCh:"蓝色"},
          {wordId:1,wordEn:"purple",wordCh:"紫色"},
          {wordId:1,wordEn:"pink",wordCh:"粉色"},
          {wordId:1,wordEn:"black",wordCh:"黑色"},
          {wordId:1,wordEn:"white",wordCh:"白色"}
       ]
     });
    }else if(id==="6"){
      that.setData({
        background: [
          {wordId:1,wordEn:"zero",wordCh:"零"},
          {wordId:1,wordEn:"one",wordCh:"一"},
          {wordId:1,wordEn:"two",wordCh:"二"},
          {wordId:1,wordEn:"three",wordCh:"三"},
          {wordId:1,wordEn:"four",wordCh:"四"},
          {wordId:1,wordEn:"five",wordCh:"五"},
          {wordId:1,wordEn: "six",wordCh:"六"},
          {wordId:1,wordEn:"seven",wordCh:"七"},
          {wordId:1,wordEn:"eight",wordCh:"八"},
          {wordId:1,wordEn:"nine",wordCh:"九"},
          {wordId:1,wordEn:"ten",wordCh:"十"},
          {wordId:1,wordEn:"eleven",wordCh:"十一"},
          {wordId:1,wordEn:"twelve",wordCh:"十二"},
          {wordId:1,wordEn:"thirteen",wordCh:"十三"},
          {wordId:1,wordEn:"fourteen",wordCh:"十四"},
          {wordId:1,wordEn:"fifteen",wordCh:"十五"},
          {wordId:1,wordEn:"sixteen",wordCh:"十六"},
          {wordId:1,wordEn:"seventeen",wordCh:"十七"},
          {wordId:1,wordEn:"eighteen",wordCh:"十八"},
          {wordId:1,wordEn:"nineteen",wordCh:"十九"},
          {wordId:1,wordEn:"twenty",wordCh:"二十"},
          {wordId:1,wordEn:"thirty",wordCh:"三十"},
          {wordId:1,wordEn:"forty",wordCh:"四十"},
          {wordId:1,wordEn:"fifty",wordCh:"五十"},
          {wordId:1,wordEn:"sixty",wordCh:"六十"},
          {wordId:1,wordEn:"seventy",wordCh:"七十"},
          {wordId:1,wordEn:"eighty",wordCh:"八十"},
          {wordId:1,wordEn:"ninety",wordCh:"九十"},
          {wordId:1,wordEn:"hundred",wordCh:"一百"},
          {wordId:1,wordEn:"thousand",wordCh:"一千"}
       ]
     });
    }else if(id==="7"){
      that.setData({
        background: [
          {wordId:1,wordEn:"fruit",wordCh:"水果"},
          {wordId:1,wordEn:"apple",wordCh:"苹果"},
          {wordId:1,wordEn:"cherry",wordCh:"樱桃"},
          {wordId:1,wordEn:"kiwi",wordCh:"猕猴桃"},
          {wordId:1,wordEn:"mango",wordCh:"芒果"},
          {wordId:1,wordEn:"peach",wordCh:"桃子"},
          {wordId:1,wordEn:"pineapple",wordCh:"菠萝"},
          {wordId:1,wordEn:"strawberry",wordCh:"草莓"},
          {wordId:1,wordEn:"banana",wordCh:"香蕉"},
          {wordId:1,wordEn:"grapes",wordCh:"葡萄"},
          {wordId:1,wordEn:"lemon",wordCh:"柠檬"},
          {wordId:1,wordEn:"orange",wordCh:"橘子"},
          {wordId:1,wordEn:"pear",wordCh:"梨子"},
          {wordId:1,wordEn:"plum",wordCh:"李子"},
          {wordId:1,wordEn:"watermelon",wordCh:"西瓜"}
       ]
     });
    }else if(id==="8"){
      that.setData({
        background: [
          {wordId:1,wordEn:"bread",wordCh:"面包"},
{wordId:1,wordEn:"milk",wordCh:"牛奶"},
{wordId:1,wordEn:"popcorn",wordCh:"爆米花"},
{wordId:1,wordEn:"tofu",wordCh:"豆腐"},
{wordId:1,wordEn:"cake",wordCh:"蛋糕"},
{wordId:1,wordEn:"egg",wordCh:"蛋"}
,{wordId:1,wordEn:"noodle",wordCh:"面条"},
{wordId:1,wordEn:"rice",wordCh:"米饭"},
{wordId:1,wordEn:"chicken",wordCh:"鸡肉"},
{wordId:1,wordEn:"fish",wordCh:"鱼肉"},
{wordId:1,wordEn:"peanuts",wordCh:"花生"},
{wordId:1,wordEn:"sandwich",wordCh:"三明治"},
{wordId:1,wordEn:"cookie",wordCh:"曲奇饼"},
{wordId:1,wordEn:"ice cream",wordCh:"冰淇淋"},
{wordId:1,wordEn:"'pizza",wordCh:"披萨"},
{wordId:1,wordEn:"solad",wordCh:"沙拉"}
       ]
     });
    }else if(id==="9"){
      that.setData({
        background: [
          {wordId:1,wordEn:"ant",wordCh:"蚂蚁"},
{wordId:1,wordEn:"cat",wordCh:"猫"},
{wordId:1,wordEn:"dog",wordCh:"狗"},
{wordId:1,wordEn:"elephant",wordCh:"大象"},
{wordId:1,wordEn:"fox",wordCh:"狐狸"},
{wordId:1,wordEn:"goat",wordCh:"山羊"},
{wordId:1,wordEn:"lion",wordCh:"狮子"},
{wordId:1,wordEn:"panda",wordCh:"熊猫"},
{wordId:1,wordEn:"rabbit",wordCh:"兔子"},
{wordId:1,wordEn:"bird",wordCh:"鸟"},
{wordId:1,wordEn:"cow",wordCh:"奶牛"},
{wordId:1,wordEn:"duck",wordCh:"鸭子"},
{wordId:1,wordEn:"fish",wordCh:"鱼"},
{wordId:1,wordEn:"monkey",wordCh:"猴子"},
{wordId:1,wordEn:"sheep",wordCh:"绵羊"},
{wordId:1,wordEn:"tiger",wordCh:"老虎"},
{wordId:1,wordEn:"frog",wordCh:"青蛙"},
{wordId:1,wordEn:"gorilla",wordCh:"大猩猩"},
{wordId:1,wordEn:"parrot",wordCh:"鹦鹉"},
{wordId:1,wordEn:"crocodile",wordCh:"鳄鱼"},
{wordId:1,wordEn:"yak",wordCh:"牦牛"},
{wordId:1,wordEn:"squirrel",wordCh:"松鼠"},
{wordId:1,wordEn:"crab",wordCh:"螃蟹"},
{wordId:1,wordEn:"zebra",wordCh:"斑马"}
       ]
     });
    }else if(id==="10"){
      that.setData({
        background: [
          {wordId:1,wordEn:"sweater",wordCh:"毛衣"},
          {wordId:1,wordEn:"scarf",wordCh:"围巾"},
          {wordId:1,wordEn:"boots",wordCh:"靴子"},
{wordId:1,wordEn:"cap",wordCh:"帽子"},
{wordId:1,wordEn:"coat",wordCh:"外套"},
{wordId:1,wordEn:"hat",wordCh:"帽子"},
{wordId:1,wordEn:"jacket",wordCh:"夹克"},
{wordId:1,wordEn:"jeans",wordCh:"牛仔裤"},
{wordId:1,wordEn:"mittens",wordCh:"手套"},
{wordId:1,wordEn:"pants",wordCh:"裤子"},
{wordId:1,wordEn:"shirt",wordCh:"衬衫"},
{wordId:1,wordEn:"shoes",wordCh:"鞋子"},
{wordId:1,wordEn:"socks",wordCh:"袜子"},
{wordId:1,wordEn:"T-shirt",wordCh:"T裇"}
       ]
     });
    }else if(id==="11"){
      that.setData({
        background: [
          {wordId:1,wordEn:"vegetable",wordCh:"蔬菜"},
          {wordId:1,wordEn:"beans",wordCh:"豆"},
          {wordId:1,wordEn:"cucumber",wordCh:"黄瓜"},
          {wordId:1,wordEn:"lettuce",wordCh:"生菜"},
          {wordId:1,wordEn:"pea",wordCh:"豌豆"},
          {wordId:1,wordEn:"spinach",wordCh:"菠菜"},
          {wordId:1,wordEn:"broccoli",wordCh:"西兰花"},
          {wordId:1,wordEn:"eggplant",wordCh:"茄子"},
          {wordId:1,wordEn:"maize",wordCh:"玉米"},
          {wordId:1,wordEn:"pepper",wordCh:"辣椒"},
          {wordId:1,wordEn:"taro",wordCh:"芋头"},
          {wordId:1,wordEn:"cabbage",wordCh:"卷心菜"},
          {wordId:1,wordEn:"garlic",wordCh:"大蒜"},
          {wordId:1,wordEn:"mushroom",wordCh:"蘑菇"},
          {wordId:1,wordEn:"potato",wordCh:"土豆"},
          {wordId:1,wordEn:"tomato",wordCh:"西红柿"},
          {wordId:1,wordEn:"carrot",wordCh:"胡萝卜"},
          {wordId:1,wordEn:"ginger",wordCh:"姜"},
          {wordId:1,wordEn:"onion",wordCh:"洋葱"},
          {wordId:1,wordEn:"pumpkin",wordCh:"南瓜"}
       ]
     });
    }else if(id==="12"){
      that.setData({
        background: [
          {wordId:1,wordEn:"ambulance",wordCh:"蔬菜"},
          {wordId:1,wordEn:"bike",wordCh:"豆"},
          {wordId:1,wordEn:"boatr",wordCh:"黄瓜"},
          {wordId:1,wordEn:"bus",wordCh:"生菜"},
          {wordId:1,wordEn:"car",wordCh:"豌豆"},
          {wordId:1,wordEn:"fire engine",wordCh:"菠菜"},
          {wordId:1,wordEn:"jeep",wordCh:"西兰花"},
          {wordId:1,wordEn:"jet",wordCh:"茄子"},
          {wordId:1,wordEn:"motorbike",wordCh:"玉米"},
          {wordId:1,wordEn:"pram",wordCh:"辣椒"},
          {wordId:1,wordEn:"rocket",wordCh:"芋头"},
          {wordId:1,wordEn:"scooter",wordCh:"卷心菜"},
          {wordId:1,wordEn:"ship",wordCh:"船"},
          {wordId:1,wordEn:"skateboard",wordCh:"滑板"},
          {wordId:1,wordEn:"train",wordCh:"火车"},
          {wordId:1,wordEn:"truck",wordCh:"卡车"},
          {wordId:1,wordEn:"van",wordCh:"面包车"},
          {wordId:1,wordEn:"plane",wordCh:"飞机"},
          {wordId:1,wordEn:"submarine",wordCh:"潜艇"},
          {wordId:1,wordEn:"yacht",wordCh:"游艇"},
          {wordId:1,wordEn:"wheel",wordCh:"轮子"},
          {wordId:1,wordEn:"traffic light",wordCh:"交通信号灯"}
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
          {wordId:1,wordEn:"teacher",wordCh:"老师"},
          {wordId:1,wordEn:"student",wordCh:"学生"},
          {wordId:1,wordEn:"police",wordCh:"警察"},
          {wordId:1,wordEn:"firefighter",wordCh:"消防员"},
          {wordId:1,wordEn:"engineer",wordCh:"工程师"},
          {wordId:1,wordEn:"cook",wordCh:"厨师"},
          {wordId:1,wordEn:"farmer",wordCh:"农民"},
          {wordId:1,wordEn:"salesclerk",wordCh:"售货员"},
          {wordId:1,wordEn:"driver",wordCh:"司机"},
          {wordId:1,wordEn:"pilot",wordCh:"飞行员"},
          {wordId:1,wordEn:"doctor",wordCh:"医生"},
          {wordId:1,wordEn:"nurse",wordCh:"护士"},
          {wordId:1,wordEn:"dentist",wordCh:"牙医"}
       ]
     });
    }else if(id==="15"){
      that.setData({
        background: [
          {wordId:1,wordEn:"sun",wordCh:"太阳"},
          {wordId:1,wordEn:"moon",wordCh:"月亮"},
          {wordId:1,wordEn:"cloud",wordCh:"云朵"},
          {wordId:1,wordEn:"sky",wordCh:"天空"},
          {wordId:1,wordEn:"flower",wordCh:"花朵"},
          {wordId:1,wordEn:"tree",wordCh:"树"},
          {wordId:1,wordEn:"rain",wordCh:"雨"},
          {wordId:1,wordEn:"snowflake",wordCh:"雪花"},
          {wordId:1,wordEn:"rock",wordCh:"石头"}
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
          {wordId:1,wordEn:"sunny",wordCh:"晴朗的"},
          {wordId:1,wordEn:"rainy",wordCh:"下雨的"},
          {wordId:1,wordEn:"windy",wordCh:"有风的"},
          {wordId:1,wordEn:"cloudy",wordCh:"多云的"},
          {wordId:1,wordEn:"snowy",wordCh:"下雪的"},
          {wordId:1,wordEn:"foggy",wordCh:"有雾的"},
          {wordId:1,wordEn:"stormy",wordCh:"有暴风雨的"},
          {wordId:1,wordEn:"hot",wordCh:"热的"},
          {wordId:1,wordEn:"cool",wordCh:"凉爽的"},
          {wordId:1,wordEn:"warm",wordCh:"温暖的"},
          {wordId:1,wordEn:"breezy",wordCh:"有微风的"},
          {wordId:1,wordEn:"humid",wordCh:"潮湿的"},
          {wordId:1,wordEn:"chilly",wordCh:"寒冷的"}
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
          {wordId:1,wordEn:"small",wordCh:"小的"},
          {wordId:1,wordEn:"big",wordCh:"大的"},
          {wordId:1,wordEn:"short",wordCh:"短的"},
          {wordId:1,wordEn:"long",wordCh:"长的"},
          {wordId:1,wordEn:"light",wordCh:"轻的，光，电灯，明亮的"},
          {wordId:1,wordEn:"heavy",wordCh:"重的"},
          {wordId:1,wordEn:"new",wordCh:"新的"},
          {wordId:1,wordEn:"old",wordCh:"老的，旧的"}
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
    let saveWord=e.currentTarget.dataset.word
    let wordCh=e.currentTarget.dataset.wordch
    let wordsId=e.currentTarget.dataset.wordsid
    const saveWordslist=wx.getStorageSync("words")
   saveWordslist.unshift({"wordsId":wordsId,"saveWord":saveWord,"wordCh":wordCh})
    wx.setStorage({
      data: saveWordslist,
      key: 'words',
    })
    console.log("aaa"+saveWordslist)
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
    
  }
})