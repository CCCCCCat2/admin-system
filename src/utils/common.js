/*
课程列表每项元素的格式
{
  sid: string
  week: string
  orders: number
  cname: string
  signalordouble: string
  teach: string
  classroom: string
}
*/

const weekMap = week => {
  const weekValue = {
    周一: 1,
    周二: 2,
    周三: 3,
    周四: 4,
    周五: 5,
    周六: 6,
    周日: 7
  }
  return weekValue[week] || 2
}

export const transferLessons = lessonArr => {
  let result = []
  for (let i = 0; i < 8; i++) {
    result.push(new Array(7).fill(''))
  }
  lessonArr.map(lesson => {
    if (result[lesson.orders - 1][weekMap(lesson.week) - 1].length === 0) {
      result[lesson.orders - 1][weekMap(lesson.week) - 1] = []
    }
    result[lesson.orders - 1][weekMap(lesson.week) - 1].push(lesson)
  })
  console.table(result)
  return result
}
