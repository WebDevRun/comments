import { createComment } from './createComment.js'

export function appendComments(container) {
  return function (comments) {
    if (!Array.isArray(comments)) {
      const commentElement = createComment(comments)
      container.append(commentElement)
      return
    }

    for (const comment of comments) {
      const commentElement = createComment(comment)
      container.append(commentElement)
    }
  }
}
