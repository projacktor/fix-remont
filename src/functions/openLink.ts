function openLink(link: string) {
  if (link) {
    return () => {
      window.open('/FixR/' + link, '_blank', 'noopener,noreferrer')
    }
  }
}

export default openLink
