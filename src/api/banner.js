import request from './request'

async function getNews() {
 return await request.get('/api/banner')
}
