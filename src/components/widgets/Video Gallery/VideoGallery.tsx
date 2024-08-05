import React from 'react'
import Image from 'next/image'
import pseudoVid1 from '../../../../public/assets/img/pseudo videos/videoE.png'
import pseudoVid2 from '../../../../public/assets/img/works gallery/work1.png'

function VideoGallery() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-around gap-4">
      <div className="video1">
        <Image src={pseudoVid1} alt="pseudo_vid" />
      </div>
      <div className="video2">
        <Image src={pseudoVid2} alt="pseudo_vid" />
      </div>
    </div>
  )
}

export default VideoGallery
