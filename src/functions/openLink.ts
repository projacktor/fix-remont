function openLink(link: string, blank = false) {
  if (blank) {
    if (link) {
      return () => {
        window.open(link, '_blank', 'noopener,noreferrer')
      }
    }
  }
  else {
    if (link) {
      return () => {
        window.open(link, 'noopener,noreferrer')
      }
    }
  }
}

export default openLink
