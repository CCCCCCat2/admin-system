import { baseUrl } from './config'

class CourseService {
  getCourseList(id) {
    return fetch(`${baseUrl}Tcourse/Tcoursesearch`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        sid: id
      })
    }).then(res => res.json())
  }
  // 课表搜索返回的是数组
  searchCourse(id) {
    return fetch(`${baseUrl}Tcourse/Tcoursesearch`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-mock-response-name': 'single-search'
      },
      mode: 'cors',
      body: JSON.stringify({
        sid: id
      })
    }).then(res => res.json())
  }
  multiSearchCourse(ids) {
    return fetch(`${baseUrl}Tcourse/TcourseMultisearch`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        sid: ids
      })
    }).then(res => res.json())
  }
  insertCourse(course) {
    return fetch(`${baseUrl}Tcourse/Tcourseinsert`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify([
        {
          sid: course.sid,
          cname: course.cname,
          teach: course.teacher,
          classroom: course.classroom,
          week: course.week,
          orders: Number(course.orders),
          signalordouble: course.signalordouble
        }
      ])
    }).then(res => res.json())
  }
  deleteCourse(course) {
    return fetch(`${baseUrl}Tcourse/Tcoursedelete`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify([
        {
          sid: course.sid,
          cname: course.cname,
          teach: course.teach,
          classroom: course.classroom,
          week: course.week,
          orders: Number(course.orders),
          signalordouble: course.signalordouble
        }
      ])
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
  updateCourse(course) {
    return fetch(`${baseUrl}Tcourse/Tcourseupdate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify([
        {
          sid: course.sid,
          cname: course.cname,
          teach: course.teacher,
          classroom: course.classroom,
          week: course.week,
          orders: course.orders,
          signalordouble: course.signalordouble
        }
      ])
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
}

export const courseService = new CourseService()
