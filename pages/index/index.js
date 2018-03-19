//index.js
//获取应用实例
const app = getApp()
var base64 = require("../../images/base64");
var WxSearch = require('../../wxSearch/wxSearch.js')
Page({
  data: {
    flag: false,
    inputShowed: false,
    inputVal: "",
    banners: [
      { id: 1, businessId: 1001, picUrl: "../../images/banner.png" },
      { id: 2, businessId: 1002, picUrl: "../../images/banner.png" },
    ],
    hot_good: [
      { id: 1, iconUrl: "../../images/hot-good.png", name: "【芬必得】布洛芬缓释胶囊 0.4g*12粒", effect: "头疼", monthlySales: "5", price: "30" },
      { id: 2, iconUrl: "../../images/hot-good.png", name: "【芬必得】布洛芬缓释胶囊 0.4g*12粒", effect: "头疼", monthlySales: "5", price: "35" },
    ]
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
  position:function(){
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {

        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: 40.0164199815,
          longitude: 116.4756077528,
          address:'北京市朝阳区时代凌宇大厦容创路17号(容创路与创达二路交叉口)',
        })
      }
    })
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '010-123456', //此号码并非真实电话号码，仅用于测试  
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
