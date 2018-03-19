const app = getApp()
var base64 = require("../../images/base64");
var WxSearch = require('../../wxSearch/wxSearch.js')
Page({
  data: {
    flag: false,
    inputShowed: false,
    inputVal: "",
    banners: [
      { id: 1, businessId: 1001, picUrl: "../../images/shop_banner.png" },
      { id: 2, businessId: 1002, picUrl: "../../images/shop_banner.png" },
      { id: 3, businessId: 1003, picUrl: "../../images/shop_banner.png" },
    ],
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  onLoad: function () {
    var that = this
    WxSearch.init(that, 43, ['研发部', '设计部', '策划部', '运营部']);
    WxSearch.initMindKeys(['研发部', '测试部', '设计部', '产品经理', '策划部', '运营部', '编辑部', '市场部', '客服部']);
    this.setData({
      icon: base64.icon20
    })
  },

  swiperchange: function (e) {

    this.setData({
      swiperCurrent: e.detail.current
    })

  },
  //广告页跳转
  tapBanner: function (e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "../" + (e.currentTarget.dataset.id == 1001 ? '' : '')
        // 预留商品详情
        // url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id   
      })
    }
  },

})

// var WxSearch = require('../../wxSearch/wxSearch.js')
// var app = getApp()
// Page({
//   data: {
//     flag: false
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
  
    
//     WxSearch.init(that, 43, ['研发部', '设计部', '策划部', '运营部']);
    
//     WxSearch.initMindKeys(['研发部', '测试部', '设计部', '产品经理', '策划部', '运营部', '编辑部', '市场部', '客服部']);
//   },

//   wxSearchInput: function (e) {
//     var that = this
//     WxSearch.wxSearchInput(e, that);

//   },
//   wxSerchFocus: function (e) {
//     var that = this
//     WxSearch.wxSearchFocus(e, that);
//     this.setData({
//       flag: true
//     })
//     console.log(this.data.flag)
//   },
//   wxSearchBlur: function (e) {
//     var that = this
//     WxSearch.wxSearchBlur(e, that);
//     this.setData({
//       flag: false,
//     })
//     this.init
//     console.log(this.data.flag)
//   },
//   wxSearchKeyTap: function (e) {
//     var that = this
//     WxSearch.wxSearchKeyTap(e, that);
//     WxSearch.wxSearchAddHisKey(that);
//   },
//   wxSearchDeleteKey: function (e) {
//     var that = this
//     WxSearch.wxSearchDeleteKey(e, that);
//   },
//   wxSearchDeleteAll: function (e) {
//     var that = this;
//     WxSearch.wxSearchDeleteAll(that);
//   },
//   wxSearchTap: function (e) {
//     var that = this
//     WxSearch.wxSearchHiddenPancel(that);
//   },
//   showInput: function () {
//     this.setData({
//       inputShowed: true
//     });
//   },
//   hideInput: function () {
//     this.setData({
//       inputVal: "",
//       inputShowed: false
//     });
//   },
//   clearInput: function () {
//     this.setData({
//       inputVal: ""
//     });
//   },
//   inputTyping: function (e) {
//     this.setData({
//       inputVal: e.detail.value
//     });
//   },
  
// })














