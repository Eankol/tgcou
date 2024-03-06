// pages/mainPages/user/children/bodyInfo/bodyInfo.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editIndex:-1,
    uesrBodyInfo:{}
  },
  tapEdit(e:any){
    let btn = e.target.dataset;
    if(this.data.editIndex!=-1&&btn.index!=this.data.editIndex){
      wx.showToast({
        title:'先保存上一个',
        icon:'none',
        duration:2000
      })
      return false;
    }
    if(this.data.editIndex==btn.index){
      this.setData({
        editIndex:-1
      })
      wx.setStorageSync('userBodyInfo',this.data.uesrBodyInfo)
      wx.showToast({
        title:'已保存!',
        icon:'success',
        duration:2000
      })
      return true;
    }
    this.setData({
      editIndex:btn.index
    })
    return true;
  },
  bindChange(e:any){
    let tInfo = <any>this.data.uesrBodyInfo;
    switch(Number(this.data.editIndex)){
      case 1:
        tInfo.bday = e.detail.value;
        break;
        case 0:
          //console.log(e.detail)
          tInfo.gender = Number(e.detail)
            break;
        case 3:
          let reg = /^[0-9]+(.[0-9]{1,3})?$/;
          if(!reg.test(e.detail)){
            wx.showToast({
              title:'非法数字',
              icon:'none',
              duration:2000
            })
            return false;
          }
            let n:string = Number(e.detail).toFixed(2);
            tInfo.weight = Number(n);
            break;
        default:
          let reg2 = /^[0-9]*$/;
          if(!reg2.test(e.detail)){
            wx.showToast({
              title:'非法数字',
              icon:'none',
              duration:2000
            })
            return false;
          }else{
            let n = Number(e.detail);
            if(this.data.editIndex==2){
              tInfo.height=n
            }
            if(this.data.editIndex==4){
              tInfo.waist=n
            }
          }
    }
    this.setData({
      uesrBodyInfo:tInfo
    })
    //console.log(this.data.uesrBodyInfo)
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
    this.setData({
      uesrBodyInfo:wx.getStorageSync('userBodyInfo')?wx.getStorageSync('userBodyInfo'):{}
    })
    //console.log(this.data.uesrBodyInfo)
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