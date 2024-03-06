//用户相关；
export default{
  needLogin:(loginInfo:any,loginPage:string)=>{
    if(!loginInfo){
      wx.showToast({
        title: '授权请求',
        duration: 2000,
        icon:'none',
        complete:()=>{
          setTimeout(()=>{
            wx.navigateTo({
              url:loginPage
            })
          },2000)
        }
      })  
      return 0;
    }else{
      return -1;
    }
  }
}