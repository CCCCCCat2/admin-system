import axios from 'axios'
import {
  baseUrl
} from './config'

const contactApi = {}

/*
@Prams
maillist: object {
  sid: string
  name: string
  age: number
  grade: string
  tel: string
  sex: string
  email: string
  QQ: string
  birth: DD-MM-YYYY
  cardid: string
  bankcard: string
  kind: string
  primary: string
}
return object {
  success: boolean
  problem: string
}
*/
contactApi.insert = function (maillist) {
  return axios({
    method: 'post',
    url: `${baseUrl}/maillistinsert`,
    data: {
      maillist
    }
  })
    .then(res => res.data())
    .catch(err => console.log(err))
}

contactApi.update = function (maillist) {
  return axios({
    method: 'post',
    url: `${baseUrl}/maillistupdate`,
    data: {
      maillist
    }
  })
    .then(res => res.data())
    .catch(err => console.log(err))
}

contactApi.delete = function (maillist) {
  return axios({
    method: 'post',
    url: `${baseUrl}/maillistdelete`,
    data: {
      maillist
    }
  })
    .then(res => res.data())
    .catch(err => console.log(err))
}

export default contactApi
