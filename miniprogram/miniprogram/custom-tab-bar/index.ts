// custom-tab-bar/index.ts
Component({
  data: {
    active: 0,
    list: [
      // {
      //   icon: 'wap-home',
      //   text: '主页',
      //   name: 'home',
      //   url: '/pages/index/index'
      // },
      {
        icon: 'gem',
        text: '工具',
        name: 'tools',
        url: '/pages/mainPages/tools/tools'
      },
      {
        icon: 'user',
        text: '我的',
        name: 'user',
        url: '/pages/mainPages/user/user'
      }
    ]
  },

  methods: {
    onChange(event:any) {
      let i = event.detail;
      this.setData({
        active: i
      });
      let url:string = this.data.list[event.detail].url;
      wx.switchTab({
        url: url
      });
    },

    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
})