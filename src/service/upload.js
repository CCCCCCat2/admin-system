/* upload接口为纸质报告、图书文献和合同协议三个模块提供了文件上传的接口 */
import { baseUrl } from './config'

//
class UploadService {
  upload({ fileField = null, sid = '', name = '', flag = 0 } = {}) {
    const formData = new FormData()
    formData.append('sid', sid)
    formData.append('name', name)
    formData.append('flag', flag)
    formData.append('file', fileField.files[0])
    return fetch(`${baseUrl}upload`, {
      method: 'POST',
      mode: 'cors',
      body: formData
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
}

export const uploadService = new UploadService()
