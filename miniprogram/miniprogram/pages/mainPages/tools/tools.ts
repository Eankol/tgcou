// pages/tools/tools.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tool:[{
      name:'BMI计算器',
      icon:'/assets/icon_gym/StomachRuler.png',
      path:'t/bmi/bmi',
      sn:'bmi',
      info:'BMI，是Body Mass Index的缩写，即身体质量指数，是国际上常用的衡量人体肥胖程度的重要标准。'
    },{
      name:'BMR计算器',
      icon:'/assets/icon_gym/cheng.png',
      path:'t/bmi/bmi',
      sn:'bmr',
      info:'基础代谢率（BMR）是指人体在静息状态下，为维持生命所需的最低能量消耗率。'
    },{
      name:'体脂率计算',
      icon:'/assets/icon_gym/miaochi.png',
      path:'t/bmi/bmi',
      sn:'bfr',
      info:'体脂率(BFR)是人体脂肪和体重的百分比。'
    },
    {
      name:'测试',
      icon:'setting',
      path:'/miniprogram/pages/tools/t/bmi.wxml',
      info:'test info,test info'
    },{
      name:'测试',
      icon:'setting',
      path:'/miniprogram/pages/tools/t/bmi.wxml',
      info:'test info,test info'
    },{
      name:'测试',
      icon:'setting',
      path:'/miniprogram/pages/tools/t/bmi.wxml',
      info:'test info,test info'
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  methods: {

  },
  openLink(e:any){
    //console.log(e.target.dataset.path,e.target.dataset.sn)
    let urlInfo = e.target.dataset;
      if(urlInfo.path&&urlInfo.sn){
        wx.navigateTo({
          url:urlInfo.path+'?sn='+urlInfo.sn+'&name='+urlInfo.name
        }).catch((err)=>{
          console.log(err)
        })
      }
  }
})