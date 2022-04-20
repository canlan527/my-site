import request from './request'
console.log('testteststes')
export async function getBanners() {
 return await request.get('/api/banner')
}
