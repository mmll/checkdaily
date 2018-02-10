// pages/goal/goal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStartDate()
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
    if(this.data.taskList){
      var taskList = this.data.taskList;
    }
    else{
      var taskList = [];
    }
    if(this.data.newTask){
      taskList.push(this.data.newTask);
    }
    this.setData({newTask: null})
    this.setData({taskList: taskList});
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
  
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (!this.data.goalName || !this.data.startDate || !this.data.endDate){
      this.setData({ error: "填写完整内容", isError: true })
        return false;
    }
    wx.request({
      url: 'http://localhost:8080/goal', //仅为示例，并非真实的接口地址
      data: {
        name: this.data.goalName,
        startTime: this.data.startDate,
        endTime: this.data.endDate,
        taskList: this.data.taskList
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        wx.switchTab({
          url: '../../pages/index/index'
        })
      }
    })
  },

  inputBlur: function (e) {
    this.setData({
      goalName: e.detail.value
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    switch(e.target.id){
      case "startDate":
        this.setData({
          startDate: e.detail.value
        })
        this.setData({
          enddateRange: e.detail.value
        })
      break;
      case 'endDate':
        this.setData({
          endDate: e.detail.value
        })
      break;
    }
  },
  getStartDate: function () {
    var date = new Date(),
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    this.setData({ todayDate: [year, month, day].join('-') })
  },
  navigateTask: function(){
    wx.navigateTo({
      url: '../task/task'
    })
  }
})