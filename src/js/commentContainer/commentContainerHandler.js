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

  if (targetElement.dataset.control === 'remove') {
    removeComment(targetElement)
    return
  }

  if (targetElement.dataset.control === 'like') {
    toggleLike(targetElement)
    return
  }
}
