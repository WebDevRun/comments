function toggleLike(element) {
  element.classList.toggle('liked')
}

function removeComment(removeElement) {
  const comment = removeElement.closest('.comment')

  if (!comment) return

  comment.remove()
}

export function commentContainerHandler(event) {
  const targetElement = event.target.closest('.comment__like, .comment__remove')

  if (!targetElement) return

  if (targetElement.id === 'remove') {
    removeComment(targetElement)
    return
  }

  if (targetElement.id === 'like') {
    toggleLike(targetElement)
    return
  }
}
