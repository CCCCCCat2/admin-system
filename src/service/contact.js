import { baseUrl } from './config'

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
contactApi.insert = function(maillist) {
  return fetch(`${baseUrl}Maillist/Mailinsert`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(maillist),
    mode: 'cors'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

contactApi.update = function(maillist) {
  return fetch(`${baseUrl}Maillist/Mailupdate`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(maillist),
    mode: 'cors'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

contactApi.delete = function(maillist) {
  return fetch(`${baseUrl}Maillist/Maildelete`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(maillist),
    mode: 'cors'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

contactApi.search = function(maillist) {
  return fetch(`${baseUrl}Maillist/Mailsearch`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(maillist),
    mode: 'cors'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default contactApi
