// components/search/propertyItem/propertyItem.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propertyInfo: {
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageUrl: app.globalData.imageURL,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})