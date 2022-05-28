import Mock from 'mockjs';

Mock.mock('/api/setting', 'get', {
  code: 0, 
  msg: '',
  data: {
    avatar: "https://avatars.githubusercontent.com/u/36915498?v=4",
    siteTitle: "我的个人空间", 
    github: "https://github.com/canlan527", 
    qq: "1481086138", 
    qqQrCode:  "https://es-upload-test-1300541676.cos.ap-nanjing.myqcloud.com/381653751433_.pic.jpg", 
      weixin: "canlan527", 
      weixinQrCode: "https://es-upload-test-1300541676.cos.ap-nanjing.myqcloud.com/361653751377_.pic.jpg", 
    mail: "1481086138@qq.com", 
    icp: "晋ICP备1234007号", 
    githubName: "灿烂", 
    favicon: "https://cn.vuejs.org/images/logo.svg", 
  }
})

