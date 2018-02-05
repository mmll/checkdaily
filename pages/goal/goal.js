// pages/goal/goal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   taskList:[]
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
    var taskList = this.data.taskList;
    taskList.push(this.data.newTask);
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
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    switch(e.target.id){
      case "startdate":
        this.setData({
          startdate: e.detail.value
        })
      break;
      case 'enddate':
        this.setData({
          enddate: e.detail.value
        })
      break;
    }
  },
  navigateTask: function(){
    wx.navigateTo({
      url: '../task/task'
    })
  }
})