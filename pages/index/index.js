//index.js
//获取应用实例
const requestUrl = require('../../config').threeDayUrl
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    daily:[],
    location:{}
    },
  onLoad:function () {
     var that = this
     wx.request({
       url: requestUrl,
       dataType:'json',
       data:{
         key: 'bgjuydfs0rqizk5v',
         location:'shanghai',
         language:'zh-Hans',
         unit:'c',
         start:0,
         days:5
       },
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: { 
         'content-type': 'application/json'
         }, // 设置请求的 header
       success: function(res){
         // success
         that.setData({
           daily: res.data.results[0].daily
         })
         that.setData({
           location: res.data.results[0].location
         })
        console.log('success')
        // console.log(res.data.results[0].daily)
        console.log(res.data.results[0].location)
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
    },
    clickBtn:function(){
      wx.navigateTo({
        url: '../test/test',
        success: function(res){
          // success
        },
        fail: function(res) {
          // fail
        },
        complete: function(res) {
          // complete
        }
      })
    }
})