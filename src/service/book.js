import { baseUrl } from './config'

/*
@insertBook 新增图书
@updateBook 更新图书信息
@deleteBook 删除图书
@searchBook 按需搜索图书
*/

class BookService {
  insertBook(book) {
    return fetch(`${baseUrl}Book/Bookinsert`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        bid: book.bid,
        name: book.name,
        number: book.number
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
  searchBook(book) {
    let searchKeys = {}
    for (const key in book) {
      if (book.hasOwnProperty(key)) {
        searchKeys[key] = book[key]
      }
    }
    return fetch(`${baseUrl}Book/Booksearch`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(searchKeys)
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
  updateBook(book) {
    let updateKeys = {}
    for (const key in book) {
      if (book.hasOwnProperty(key)) {
        updateKeys[key] = book[key]
      }
    }
    return fetch(`${baseUrl}Book/Bookupdate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(updateKeys)
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
  deleteBook(id) {
    return fetch(`${baseUrl}Book/Bookdelete`, {
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
      .catch(err => console.log(err))
  }
}

export const bookService = new BookService()
