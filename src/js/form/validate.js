const toValidate = {}

function isEmpty(elements) {
  const emptyElements = []
  let status = false

  for (const element of elements) {
    if (element.value === '') {
      emptyElements.push({ element, status: 'empty' })
      status = true
    }
  }

  return [status, emptyElements]
}

function isMoreToday(elements) {
  const now = new Date()
  const moreTodayElements = []
  let status = false

  for (const element of elements) {
    const date = new Date(`${element.value} 00:00:00`)
    const diff = now - date

    if (diff < 0) {
      moreTodayElements.push({ element, status: 'moreToday' })
      status = true
    }
  }

  return [status, moreTodayElements]
}

export function validate() {
  let isValid = false
  const notValidElements = []

  const [emptyStatus, emptyElements] = isEmpty(toValidate.notEmpty)
  const [moreTodayStatus, moreTodayElements] = isMoreToday(
    toValidate.notMoreToday
  )

  isValid = emptyStatus || moreTodayStatus

  notValidElements.push(...emptyElements)
  notValidElements.push(...moreTodayElements)

  return [isValid, notValidElements]
}

export function setToValidate({ notEmpty = [], notMoreToday = [] }) {
  toValidate.notEmpty = notEmpty
  toValidate.notMoreToday = notMoreToday
}
