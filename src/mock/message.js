import Mock from "mockjs";
import qs from "querystring";

Mock.mock(/^\/api\/messages\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 42,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://tse1-mm.cn.bing.net/th/id/R-C.54c9e248a170b1e56533fb493f0f2577?rik=%2fd4vM7Ss8%2bhyZg&riu=http%3a%2f%2fimg.ewebweb.com%2fuploads%2f20200621%2f16%2f1592726851-faUcBtJemO.jpeg&ehk=ULxMKNlWiDx%2fc6Qdcftaf9mWDh3g5vsWACCWhlNe0YM%3d&risl=&pid=ImgRaw&r=0",
            "https://tse1-mm.cn.bing.net/th/id/R-C.6589a3d00eabccba31aefc7f06a5c115?rik=Vi%2bgI8Q%2fendIEg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201809%2f28%2f1538119366498437.jpg&ehk=ukuQwwfWDqGTMUqOyoQhrkwM0Kp%2bGFSvoO7bBHl2fpY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            "https://pic.qqtn.com/up/2018-1/15160605728289534.jpg",
            "https://tse1-mm.cn.bing.net/th/id/R-C.3b237e707957b55583a1bc94e86a8f3f?rik=fBSVgOURoZ9XzQ&riu=http%3a%2f%2fimg.name2012.com%2fuploads%2fallimg%2f2014-10%2f07-025615_255.jpg&ehk=4tQIJWIPb5Zo6AC2RBKMGVgeTozwRFYdccGOEfWVaJ4%3d&risl=&pid=ImgRaw&r=0",
            "https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=4e5a8852fdedab64742745c6c70683fb/838ba61ea8d3fd1fab6154a3364e251f95ca5f3b.jpg",
          ],
        },
      ],
    },
    // data: {
    //   total: 0,
    //   rows: [],
    // },
  });
});

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://tse1-mm.cn.bing.net/th/id/R-C.54c9e248a170b1e56533fb493f0f2577?rik=%2fd4vM7Ss8%2bhyZg&riu=http%3a%2f%2fimg.ewebweb.com%2fuploads%2f20200621%2f16%2f1592726851-faUcBtJemO.jpeg&ehk=ULxMKNlWiDx%2fc6Qdcftaf9mWDh3g5vsWACCWhlNe0YM%3d&risl=&pid=ImgRaw&r=0",
      "https://tse1-mm.cn.bing.net/th/id/R-C.6589a3d00eabccba31aefc7f06a5c115?rik=Vi%2bgI8Q%2fendIEg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201809%2f28%2f1538119366498437.jpg&ehk=ukuQwwfWDqGTMUqOyoQhrkwM0Kp%2bGFSvoO7bBHl2fpY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      "https://pic.qqtn.com/up/2018-1/15160605728289534.jpg",
      "https://tse1-mm.cn.bing.net/th/id/R-C.3b237e707957b55583a1bc94e86a8f3f?rik=fBSVgOURoZ9XzQ&riu=http%3a%2f%2fimg.name2012.com%2fuploads%2fallimg%2f2014-10%2f07-025615_255.jpg&ehk=4tQIJWIPb5Zo6AC2RBKMGVgeTozwRFYdccGOEfWVaJ4%3d&risl=&pid=ImgRaw&r=0",
      "https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=4e5a8852fdedab64742745c6c70683fb/838ba61ea8d3fd1fab6154a3364e251f95ca5f3b.jpg",
    ],
  },
});
