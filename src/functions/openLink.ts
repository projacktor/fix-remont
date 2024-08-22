function openLink(link: string, blank: boolean = false) {
  const shouldOpenInNewTab = blank === true
  if (shouldOpenInNewTab) {
    if (link) {
      return () => {
        window.open(link, '_blank', 'noopener,noreferrer')
      }
    }
  } else {
    if (link) {
      return () => {
        window.open(link, '_self', 'noopener,noreferrer')
      }
    }
  }
}

export default openLink
