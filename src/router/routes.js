import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import Message from '@/views/Message'
import Project from '@/views/Project'

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