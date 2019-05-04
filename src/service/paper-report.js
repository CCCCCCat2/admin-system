import { baseUrl } from './config'

class PaperReportService {
  searchPaperReport(paperParams) {
    return fetch(`${baseUrl}Thesis/Thesissearch`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        sid: paperParams.sid,
        tname: paperParams.tname
      })
    })
  }
}

export const paperReportService = new PaperReportService()
