//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    results:{},
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // onLoad:function(){
  //   var that = this
  //  wx.getLocation({
  //    type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  //    success: function(res){
  //      that.setData({
  //       res:res
  //     })
  //     console.log('success')
  //    },
  //    fail: function() {
  //      // fail
  //      console.log('fail')
  //    },
  //    complete: function() {
  //      // complete
  //      console.log('complete')
  //    }
  //  })
  // },
  onLoad:function () {
    console.log('1')
     var that = this
     wx.request({
       url: 'https://api.seniverse.com/v3/weather/now.json',
       data: {
         key:'bgjuydfs0rqizk5v',
         location:'shanghai',
         language:'zh-Hans',
         unit:'c'
       },
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: { 
         'content-type': 'application/json'}, // 设置请求的 header
       success: function(res){
         // success
         that.setData({
           res:res.data.results
        })
        console.log(res.data)
       },
       fail: function() {
         // fail
         console.log('fail')
       },
       complete: function() {
         // complete
         console.log('complete')
       }
     })
     }
})