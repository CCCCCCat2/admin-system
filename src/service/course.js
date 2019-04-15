import {
  baseUrl
} from './config'

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
    })
      .then(res => res.json())
  }
  insertCourse(course) {
    return fetch(`${baseUrl}Tcourse/Tcourseinsert`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify([ {
        sid: course.sid,
        cname: course.cname,
        teach: course.teacher,
        classroom: course.classroom,
        week: course.week,
        orders: course.orders,
        signalordouble: 'double'
      } ])
    })
      .then(res => res.json())
  }
  deleteCourse(id) {
    return fetch(`${baseUrl}Tcourse/Tcoursedelete`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        id: id
      })
    })
      .then(res => res.json())
  }
  updateCourse(course) {
    return fetch(`${baseUrl}Tcourse/Tcourseupdate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify([ {
        sid: course.sid,
        cname: course.cname,
        teach: course.teacher,
        classroom: course.classroom,
        week: course.week,
        orders: course.orders,
        signalordouble: 'double'
      } ])
    })
      .then(res => res.json())
  }
}

export const courseService = new CourseService()
