import axios from 'axios'
import {
  baseUrl
} from './config';

class CourseService {
  getCourseList(id) {
    return axios({
      method: 'GET',
      url: `${baseUrl}Tcourse/tcoursesearch`,
      data: {
        id: id
      }
    })
      .then(res => res.data())
  }
  insertCourse(course) {
    return fetch(`${baseUrl}Tcourse/Tcourseinsert`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        sid: course.sid,
        cname: course.cname,
        teach: course.teacher,
        classroom: course.classroom,
        week: course.week,
        orders: course.orders,
        signalordouble: 'double'
      })
    })
      .then(res => res.json())
  }
  deleteCourse(id) {
    return axios({
      method: 'POST',
      data: {
        id: id
      }
    })
      .then(res => res.data())
  }
}

export const courseService = new CourseService()
