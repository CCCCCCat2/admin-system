import axios from 'axios'
import {
  baseUrl
} from './config';

class CourseService {
  getCourseList(id) {
    return axios({
      method: 'GET',
      url: `${baseUrl}Access/tcoursesearch`,
      data: {
        id: id
      }
    })
      .then(res => res.data())
  }
  insertCourse(course) {
    return axios({
      method: 'POST',
      data: {
        sid: course.sid,
        cname: course.cname,
        teach: course.teacher,
        classroom: course.classroom,
        week: course.week,
        orders: course.orders
      }
    })
      .then(res => res.data())
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
