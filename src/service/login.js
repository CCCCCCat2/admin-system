import axios from 'axios'
import {
  baseUrl
} from './config'

const auth = {}

auth.login = function (id, password) {
  return axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      id: id,
      password: password
    }
  })
    .then(res => {
      res.data()
    })
    .catch(err => console.log(err))
}

// auth.register = function ()
