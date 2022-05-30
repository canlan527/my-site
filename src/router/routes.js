// 页面分包： 路由懒加载
const Home = () => import('@/views/Home'/* webpackChunkName: Home */);
const About = () => import('@/views/About'/* webpackChunkName: About */);
const Project = () => import('@/views/Project'/* webpackChunkName: Project */);
const Message = () => import('@/views/Message'/* webpackChunkName: Message */);
const Blog = () => import('@/views/Blog'/* webpackChunkName: Blog */);
const BlogDetail = () => import('@/views/Blog/Detail'/* webpackChunkName: BlogDetail */);

const routes = [
  { name: 'Home', path: '/', component: Home,meta: { title: '首页'}}, 
  { name: 'About', path: '/about', component: About,meta: { title: '关于我'}}, 
  { name: 'Project', path: '/project', component: Project,meta: { title: '项目&&效果'}}, 
  { name: 'Message', path: '/message', component: Message,meta: { title: '留言板'}}, 
  { name: 'Blog', path: '/blog', component: Blog,meta: { title: '文章列表'}}, 
  { name: 'cateBlog', path: '/blog/cate/:cateId', component: Blog,meta: { title: '文章列表'}}, 
  { name: 'blogDetail', path: '/blog/:id', component: BlogDetail,meta: { title: '文章详情'}}, 
]

export default routes