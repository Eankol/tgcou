// pages/mainPages/user/user.ts
import userUtil from "../../../utils/userUtil"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginPage:"../../login/login",
    userInfo:{},
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime(),
    maxDate: new Date().getTime(),
  },
  showLog(){
    wx.navigateTo({
      url:'../../log/log'
    })
  },
  bodyInfo(){
    userUtil.needLogin(wx.getStorageSync('TUser'),this.data.loginPage)
    wx.navigateTo({
      url:'children/bodyInfo/bodyInfo'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //授权请求；
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    userUtil.needLogin(wx.getStorageSync('TUser'),this.data.loginPage)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
    this.setData({
      userInfo:wx.getStorageSync('TUser')
    })
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