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
    url: `${baseUrl}/contact`,
    data: {
      maillist
    }
  })
    .then(res => res.data())
    .catch(err => console.log(err))
}

contactApi.test = function (id) {
  alert(`你的账号是${id}`)
}

export default contactApi
