const basePath = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';
const axios = require('axios');
const token = process.env.TOKEN

module.exports = {

  //APP
  getProducts: (page=1, count=5) => {
    return axios({
      url:'/products',
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
      params:{page, count}
    })
  },

  //Overview
  getProductInfo: (product_id) => {
    return axios({
      url: `/products/${product_id}`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
    })
  },
  getStyles: (product_id) => {
    return axios({
      url: `/products/${product_id}/styles`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
    })
  },
  getCart: () => {
    return axios({
      url: `/cart`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
  AddToCart: (sku_id) => {
    return axios({
      url: `/cart`,
      method: 'post',
      baseURL: basePath,
      headers:{Authorization: token},
      params:{sku_id}
    })
  },
  // getPhotos: (product_id) => {
  //   return axios({
  //     url: `/products/styles`,
  //     method: 'get',
  //     baseURL: basePath,
  //     headers:{Authorization: token},
  //     params:{product_id}
  //   })
  // },

  //Related
  getRelated: (product_id) => {
    return axios({
      url:`/products/${product_id}/related`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },

  //Reviews
  getReviews: (product_id, page=1, count=5, sort='newest') => {
    return axios({
      url:`/reviews`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
      params:{product_id, page, count, sort}
    })
  },
  getReviewMeta: (product_id) => {
    return axios({
      url:`/reviews/meta`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
      params:{product_id}
    })
  },
  addReview: (data) => {
    return axios({
      url:`/reviews`,
      method: 'post',
      baseURL: basePath,
      headers:{Authorization: token},
      data
    })
  },
  markReviewAsHelpful: (review_id) => {
    return axios({
      url: `/reviews/${review_id}/helpful`,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
  reportReview: (review_id) => {
    return axios({
      url: `/reviews/${review_id}/report`,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },

  //Q&A
  getQuestions: (product_id, page=1, count=5) => {
    return axios({
      url:`/qa/questions`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
      params:{product_id, page, count}
    })
  },
  getAnswers: (question_id, page=1, count=5) => {
    return axios({
      url:`/qa/questions/${question_id}/answers`,
      method: 'get',
      baseURL: basePath,
      headers:{Authorization: token},
      params: {page, count}
    })
  },
  addQuestion: (data) => {
    return axios({
      url:`/qa/questions`,
      method: 'post',
      baseURL: basePath,
      headers:{Authorization: token},
      data
    })
  },
  addAnswer: (question_id, data) => {
    return axios({
      url:`/qa/questions/${question_id}/answers`,
      method: 'post',
      baseURL: basePath,
      headers:{Authorization: token},
      data
    })
  },
  markQuestionAsHelpful: (question_id) => {
    return axios({
      url: `/qa/questions/${question_id}/helpful`,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
  markAnswerAsHelpful: (answer_id) => {
    return axios({
      url: `/qa/answers/${answer_id}/helpful`,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
  reportQuestion: (question_id) => {
    return axios({
      url: `/qa/questions/${question_id}/report`,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
  reportAnswer: (answer_id) => {
    return axios({
      url: `/qa/answers/${answer_id}/report`,
      method: 'put',
      baseURL: basePath,
      headers:{Authorization: token}
    })
  },
}
