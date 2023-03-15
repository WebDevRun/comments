import { formatDateTime } from './formatDateTime.js'
import basket from '../../images/basket.svg'

function createTopBoard(name, date) {
  const topBoard = document.createElement('div')
  topBoard.classList.add('comment__top-board')

  const userName = document.createElement('p')
  userName.classList.add('comment__user-name')
  userName.textContent = name

  const dateContainer = document.createElement('p')
  dateContainer.classList.add('comment__date')
  dateContainer.textContent = formatDateTime(date)

  topBoard.append(userName, dateContainer)
  return topBoard
}

function createTextContainer(text) {
  const textContainer = document.createElement('p')

  textContainer.classList.add('comment__text')
  textContainer.textContent = text

  return textContainer
}

function createBottomBoard(like) {
  const bottomBoard = document.createElement('div')
  bottomBoard.classList.add('comment__bottom-board')

  const likeContainer = document.createElement('div')
  likeContainer.setAttribute('data-control', 'like')
  likeContainer.classList.add('comment__like')
  likeContainer.innerHTML = `
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="white" fill-opacity="0.01" />
    <path
      d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  `
  if (like) {
    likeContainer.classList.add('liked')
  }

  const remove = document.createElement('div')
  remove.setAttribute('data-control', 'remove')
  remove.classList.add('comment__remove')

  const removeIcon = document.createElement('img')
  removeIcon.src = basket
  removeIcon.alt = 'remove'

  remove.append(removeIcon)
  bottomBoard.append(likeContainer, remove)

  return bottomBoard
}

export function createComment({ id, text, name, date, like }) {
  const comment = document.createElement('div')
  comment.classList.add('comments__comment')
  comment.classList.add('comment')
  comment.id = id

  const topBoard = createTopBoard(name, date)
  const textContainer = createTextContainer(text)
  const bottomBoard = createBottomBoard(like)

  comment.append(topBoard, textContainer, bottomBoard)

  return comment
}
