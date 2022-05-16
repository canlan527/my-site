import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import Message from '@/views/Message'
import Project from '@/views/Project'

const routes = [
  { name: 'Home', path: '/', component: Home}, 
  { name: 'About', path: '/about', component: About}, 
  { name: 'Project', path: '/project', component: Project}, 
  { name: 'Message', path: '/message', component: Message}, 
  { name: 'Blog', path: '/blog', component: Blog}, 
  { name: 'cateBlog', path: '/blog/cate/:cateId', component: Blog}, 
  { name: 'blogDetail', path: '/blog/:id', component: BlogDetail}, 
]

export default routes