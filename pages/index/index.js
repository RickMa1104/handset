//index.js
//获取应用实例
const app = getApp();
var loger = require("../../utils/loger.js");

Page({
  data: {
  power:false,
  auto:false,
  lock:false,
  sleep:false,
  anion:false,
  bac:false,
  time:false,
  fan:false,

  },
  onButton:function(event){
    var id =event.target.id;
    if(id=="power")
    {
      if (this.data.power==true)
      {
        this.setData({ auto: false});
        this.setData({ sleep: false});
        this.setData({ lock: false });
        this.setData({ anion: false });
        this.setData({ bac: false });
        this.setData({ time: false });
        this.setData({ fan: false });
      }
      else
      {
        this.setData({ auto: true });
        this.setData({ sleep: false });
        this.setData({ lock: false });
        this.setData({ anion: true });
        this.setData({ bac: true });
        this.setData({ time: false });
        this.setData({ fan: false });
      }
     
      this.setData({ power: !this.data.power });
    }
    if(this.data.power==true)
    {
      if (id == "auto") {
        this.setData({ auto: !this.data.auto });
      } else if (id == "sleep") {
        this.setData({ sleep: !this.data.sleep });
      } else if (id == "lock") {
        this.setData({ lock: !this.data.lock });
      } else if (id == "anion") {
        this.setData({ anion: !this.data.anion });
      } else if (id == "bac") {
        this.setData({ bac: !this.data.bac });
      } else if (id == "time") {
        this.setData({ time: !this.data.time });
      } else if (id == "fan") {
        this.setData({ fan: !this.data.fan });
      }
    }
  },


  onShow: function () {
    app.globalData.userInfo = "wxopen.club";
    loger.PrintLog("execute index onShow");
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
