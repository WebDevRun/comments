import { commentList } from './db/index.js'
import { getToday } from './form/getToday.js'
import {
  formSubmitHandler,
  appendSubmitSubscribers,
  setToValidate,
} from './form/index.js'
import {
  appendComments,
  commentContainerHandler,
} from './commentContainer/index.js'

const form = document.querySelector('#form')
const commentsContainer = document.querySelector('#comments-container')

const validateElements = {
  notEmpty: [form.text, form.name, form.date],
  notMoreToday: [form.date],
}

setToValidate(validateElements)

form.date.value = getToday()

const bindingAppendComments = appendComments(commentsContainer)

bindingAppendComments(commentList)
appendSubmitSubscribers([bindingAppendComments])

form.addEventListener('submit', formSubmitHandler)
commentsContainer.addEventListener('click', commentContainerHandler)
