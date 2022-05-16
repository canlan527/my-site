import request from './request';

export async function getBlogType() {
  return await request.get('/api/blogtypes');
}

export async function getBlogList(page = 1, limit = 10, categoryid=-1) {
  return await request.get(`/api/blog?page=${page}&limit=${limit}&categoryid=${categoryid}`)
}

// 获取单个博客
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}
// 添加评论
export async function addComment(commentInfo) {
  return await request.post('/api/comment', commentInfo);
}
// 分页获取评论
export async function getCommentlist(blogid, page = 1, limit = 10) {
  return await request.get(`/api/comment`, {
    params: { blogid, page, limit },
  });
}