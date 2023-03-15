import { formatDateTimeNumber } from '../utils/formatDateTimeNumber.js'

function formatDate(dateValue) {
  const year = dateValue.getFullYear()
  const month = formatDateTimeNumber(dateValue.getMonth() + 1)
  const date = formatDateTimeNumber(dateValue.getDate())

  return `${year}-${month}-${date}`
}

function formatTime(dateValue) {
  const hours = formatDateTimeNumber(dateValue.getHours())
  const minutes = formatDateTimeNumber(dateValue.getMinutes())

  return `${hours}:${minutes}`
}

export function getToday() {
  const today = new Date()
  return formatDate(today)
}

export function getNowTime() {
  const date = new Date()
  return formatTime(date)
}
