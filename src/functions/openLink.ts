function openLink(link: string) {
    return () => {
        window.open("/FixR/" + link, '_blank', 'noopener,noreferrer');
    }
}

export default openLink;