import request from './request';

export async function getMessage(page = 1, limit = 10) {
  return await request.get('/api/messages', {
    params: {
      page, limit
    }
  })
}

export async function addMessage(msgInfo) {
  return await request.post('/api/message', msgInfo)
}