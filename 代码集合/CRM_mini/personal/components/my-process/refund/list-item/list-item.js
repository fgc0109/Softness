// personal/components/my-process/refund/list-item/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    listItem: {
      type: Object
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 复制链接
    copyText(e) {
      let text = e.currentTarget.dataset.text
      wx.setClipboardData({
        data: text,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    },
    //去详情
    toDetail(){
      wx.navigateTo({
        url: `/personal/pages/my-process/detail/refund/index?id=${this.data.listItem.id}`,
      })
    },
  }
})
