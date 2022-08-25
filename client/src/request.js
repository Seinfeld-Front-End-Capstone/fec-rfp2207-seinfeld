const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';
const axios = require('axios');
const token = process.env.TOKEN


module.exports = {
  get: (url) => {
    return axios({
      url,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
  post: (url, data) => {
    return axios({
      url,
      method: 'post',
      baseURL: basePath,
      headers:{Authorization: token},
      data
    })
  },
  put: (url, data) => {
    return axios({
      url,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token},
      data
    })
  }
}
