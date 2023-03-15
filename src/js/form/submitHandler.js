import { commentList } from '../db/index.js'
import { validate } from '../form/validate.js'
import { getNowTime } from './getToday.js'
import { setError } from './errorWorker.js'

const submitSubscribers = []

function createCommentObject(form) {
  const formData = new FormData(form)
  const comment = {}

  formData.set('id', Date.now())
  formData.set('like', false)

  for (const [key, value] of formData) {
    if (key === 'date') {
      const nowTime = getNowTime()
      const date = new Date(`${value} ${nowTime}`)

      comment[key] = date
      continue
    }

    comment[key] = value
  }

  return comment
}

export function formSubmitHandler(event) {
  event.preventDefault()

  const [isValid, notValidElements] = validate()

  if (isValid) {
    setError(notValidElements)
    return
  }

  const comment = createCommentObject(event.target)
  console.log(comment)
  commentList.push(comment)

  for (const subscriber of submitSubscribers) {
    subscriber(comment)
  }
}

export function appendSubmitSubscribers(subscribers) {
  for (const subscriber of subscribers) {
    submitSubscribers.push(subscriber)
  }
}
