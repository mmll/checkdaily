// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name:"日", value: "day", checked: true},
      {name:"周", value: "week", checked: false}],
    dayRange: ["1","2","3","4","5","6"],
    showPeriod: false
  },
  radioChange: function (e){
    if(e.detail.value == 'day'){
      this.setData({
        showPeriod: false
      })
    }
    else{
      this.setData({
        showPeriod: true
      })
    }
    this.setData({
      taskPeriod: e.detail.value
    })
  },
  inputBlur: function(e){
    this.setData({
      taskName: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setDate({
      taskTimes: e.detail.value-1
    })
  },
  formSubmit: function (e) {
    var taskItem = {
      'taskName': this.data.taskName,
      'taskPeriod': this.data.taskPeriod,
      'taskTimes': this.data.taskTimes
    }
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      newTask: taskItem
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.navigateBack({
      url: '../goal/goal'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})