// pages/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{userName:''},
    pageMsg:{
      tip:'不会上传任何数据，不授权会影响部分功能的体验。\n 本小程序数据存于本地，为避免数据丢失，请勿随意删除本小程序。',
      info:'1.头像读取；\n 2.本地存储；'
    }
  },
  bindchooseavatar(e:any) {
    //console.log("avatarUrl",e.detail.avatarUrl)
    this.setData({
      'userInfo.avatarUrl':e.detail.avatarUrl
    })
  },
  getUserName(e:any){
    this.setData({
      'userInfo.userName':e.detail.value
    })
  },
  setUserInfo(){
    if(!this.data.userInfo.userName||this.data.userInfo.userName.length<1){
      wx.showToast({
        title: '未输入昵称',
        icon:'none',
        duration: 2000,
      })
      return false
    }
    if(this.data.userInfo.userName.length>0){
      wx.setStorageSync('TUser',this.data.userInfo)
      wx.navigateBack({
        delta:1
      })
    }
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
    this.setData({//每次进入重新获取user信息
      userInfo:wx.getStorageSync('TUser')
    })
    //console.log(this.data.userInfo)
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

  }
})