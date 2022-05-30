import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from "@/views/NotFound";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

// nprograss 进度条
function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(1000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

// 页面分包： 路由懒加载
const Home = getPageComponent(() =>
  import("@/views/Home" /* webpackChunkName: Home */)
);
const About = getPageComponent(() =>
  import("@/views/About" /* webpackChunkName: About */)
);
const Project = getPageComponent(() =>
  import("@/views/Project" /* webpackChunkName: Project */)
);
const Message = getPageComponent(() =>
  import("@/views/Message" /* webpackChunkName: Message */)
);
const Blog = getPageComponent(() =>
  import("@/views/Blog" /* webpackChunkName: Blog */)
);
const BlogDetail = getPageComponent(() =>
  import("@/views/Blog/Detail" /* webpackChunkName: BlogDetail */)
);

const routes = [
  { name: "Home", path: "/", component: Home, meta: { title: "首页" } },
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: { title: "关于我" },
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
    meta: { title: "项目&&效果" },
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
    meta: { title: "留言板" },
  },
  { name: "Blog", path: "/blog", component: Blog, meta: { title: "文章列表" } },
  {
    name: "cateBlog",
    path: "/blog/cate/:cateId",
    component: Blog,
    meta: { title: "文章列表" },
  },
  {
    name: "blogDetail",
    path: "/blog/:id",
    component: BlogDetail,
    meta: { title: "文章详情" },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];

export default routes;
