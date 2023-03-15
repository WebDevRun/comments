const errorMessages = {
  empty: 'Поле должно быть заполнено',
  moreToday: 'Дата дожна быть сегодняшней или ранее',
}

function inputHandler(event) {
  event.target.classList.remove('error')
  event.target.removeEventListener('input', inputHandler)
  event.target.parentElement.lastChild.remove()
}

function createErrorMessage(text) {
  const div = document.createElement('div')
  div.classList.add('form__error-message')
  div.textContent = text

  return div
}

export function setError(notValidElements) {
  for (const { element, status } of notValidElements) {
    const errorMessageElement = createErrorMessage(errorMessages[status])

    element.classList.add('error')
    element.addEventListener('input', inputHandler)

    const lastElement = element.parentElement.lastElementChild

    if (lastElement.classList.contains('form__error-message')) continue

    element.parentElement.append(errorMessageElement)
  }
}
