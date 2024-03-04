// custom-tab-bar/index.ts
Component({
  data: {
    active: '0',
    list: [{
        icon: 'wap-home',
        text: '主页',
        name: 'home',
        url: '/pages/index/index'
      },{
        icon: 'gem',
        text: '工具',
        name: 'tools',
        url: '/pages/tools/tools'
      },
      {
        icon: 'setting',
        text: '设置',
        name: 'setting',
        url: '/pages/logs/logs'
      }
    ]
  },

  methods: {
    onChange(event:any) {
      this.setData({
        active: event.detail
      });
      wx.switchTab({
        url: this.data.list[event.detail].url,
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