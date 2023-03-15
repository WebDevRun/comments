import { formatDateTimeNumber } from '../utils/formatDateTimeNumber.js'

export function formatDateTime(dateValue) {
  const commentDate = new Date(dateValue)
  const now = new Date()
  const dateDiff = now.getDate() - commentDate.getDate()

  const hours = formatDateTimeNumber(now.getHours())
  const minutes = formatDateTimeNumber(now.getMinutes())

  if (dateDiff < 1) {
    return `Сегодня ${hours}:${minutes}`
  }

  if (dateDiff >= 1 && dateDiff < 2) {
    return `Вчера ${hours}:${minutes}`
  }

  const year = commentDate.getFullYear()
  const month = formatDateTimeNumber(commentDate.getMonth() + 1)
  const date = formatDateTimeNumber(commentDate.getDate())

  return `${date}-${month}-${year} ${hours}:${minutes}`
}
