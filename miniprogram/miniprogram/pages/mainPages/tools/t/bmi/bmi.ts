// pages/tools/t/bmi.ts
import { cal } from '../../../../../utils/bmiUtil'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sn: '',
    bInfo: {},
    currentDate: '2024-03',
    title: '',
    gender:[{id:0,text:'女'},{id:1,text:'男'}],
    cdata: {p_g: 1, p_t: 168, p_wt: 66, p_a: 0, p_wl: 0},
    res: {},
    disableWl:true,
    disabledBtn: false
  },
  disonChange(e:any){
    this.setData({
      disableWl:e.detail
    })
    if(this.data.disableWl){
      this.setData({
        'cdata.p_wl': 0
      })
    }
  },
  bindDateChange1(event: any) {//性别
    this.setData({
      'cdata.p_g': event.detail.value
    })
  },
  bindDateChange(event: any) {//日期选择
    //console.log(event.detail.value)
    this.setData({
      currentDate: event.detail.value
    });
    let birthdays = new Date((this.data.currentDate + '-01').replace(/-/g, "/"));
    let d = new Date();
    let age: number =
      d.getFullYear() -
      birthdays.getFullYear() -
      (d.getMonth() < birthdays.getMonth() ||
        (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
        ? 1
        : 0);
    this.setData({
      'cdata.p_a': age
    })
  },
  onDrag(event: any) {//体重
    this.setData({
      'cdata.p_wt': event.detail.value
    })
  },
  onDragT(event: any) {//身高
    this.setData({
      'cdata.p_t': event.detail.value
    })
  },
  onDragL(event: any) {//腰围
    this.setData({
      'cdata.p_wl': event.detail.value
    })
  },
  doCal() {//提交计算，禁用按钮，防止骚操作！
    this.setData({
      disabledBtn:true
    })
    let p = this.data.cdata;
    let res = cal(this.data.sn, p.p_g, p.p_t, p.p_wt, p.p_a, p.p_wl)
    //console.log(res)
    this.setData(
      {
        res: res
      }
    )
    this.setData({
      disabledBtn:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e: any) {
    let that = this;
    //console.log(e)
    that.setData(
      {
        sn: e.sn,
        title: e.name
      }
    )
    if (e.sn == 'bmi') {
      that.setData({
        bInfo: {
          msg: '身体质量指数即BMI（Body Mass Index）指数（身体质量指数，简称体质指数），由19世纪中期的比利时通才凯特勒最先提出，是与体内脂肪总量密切相关的指标，是常用的衡量人体胖瘦程度、是否健康的一个标准。\n BMI值是一个中立而可靠的指标。男性理想BMI指数是22，女性理想BMI指数是19。BMI不是所有的人群都适合，如下人群不适合：\n 未满18岁；运动员；正在做重量训练；怀孕或哺乳中；做过手术，身上有其他材料的患者；身体虚弱或久坐不动的老人。',
          tip: '体重过低BMI<18.5	正常18.5≤BMI<24	超重24≤BMI<28	肥胖28≤BMI \n （该指标并不适用于所有人）'
        }
      })
    }
    if (e.sn == 'bmr') {
      that.setData({
        bInfo: {
          msg: '基础代谢率（Basal Metabolic Rate，BMR）是指人体在清醒而又极端安静的状态下，不受肌肉活动、环境温度、食物及精神紧张等影响时的能量代谢率。即基本的生理活动（即血液循环、呼吸及恒定的体温）时，每小时单位表面积最低耗热量减去标准耗热量，其差值与标准耗热量之百分比，称为基础代谢率。 \n 目前常用的精准的BMR计算公式是Mifflin-St Jeor公式，该公式基于大样本人群的研究得出，考虑了性别、年龄、身高和体重等因素',
          tip: ''
        }
      })
    }
    if (e.sn == 'bfr') {
      that.setData({
        bInfo: {
          msg: '体脂率是人体脂肪和体重的百分比。正常的人体中约有1/4是由皮下及内脏脂肪组成，负责维持器官稳定及保护内脏等功能。具体的数值还会因为年龄有所差别，年龄越大，体脂率通常会越高。',
          tip: '一般成年男性体脂肪率超过25%，成年女性超过30%就为肥胖；而男性体脂率介于15- 25%，女性体脂率介于20-30%为正常值。（该指标并不适用于所有人）'
        }
      })
    }

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