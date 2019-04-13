import axios from 'axios'
import {
  baseUrl
} from './config'

const auth = {}

auth.login = function (id, password, type) {
  return axios({
    method: 'post',
    url: `${baseUrl}Access/Login`,
    headers: {
      'content-type': 'application/json'
    },
    withCredentials: true,
    data: {
      sid: id,
      password: password,
      type: type
    }
  })
    .then(res => {
      res.data()
    })
    .catch(err => console.log(err))
}

auth.register = function (id, password, type) {
  // return axios({
  //   method: 'POST',
  //   url: `${baseUrl}Access/Register`,
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   withCredentials: true,
  //   data: {
  //     sid: id,
  //     password: password,
  //     kind: type+''
  //   }
  // })
  return fetch(`${baseUrl}Access/Register`, {
    method: 'POST',
    body: JSON.stringify({
      sid: id,
      password: password,
      kind: type+''
    }),
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .catch(err => console.log(err))
}

// auth.register = function ()

export default auth
