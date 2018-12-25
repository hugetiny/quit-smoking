import Request from '../utils/request'

export const getBaiduImg = data => Request({
  url: '/search/avatarjson',
  method: 'GET',
  data,
})
