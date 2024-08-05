import React from 'react'
import Minibar from '../Minibar/Minibar'
import Image from 'next/image'
import videoBtn from '../../../../public/assets/svg/videoBtn.svg'

interface MinibarVideoProps {
  desc_content: string
}

const MinibarVideo: React.FC<MinibarVideoProps> = ({ desc_content }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <button className="h-16 border-none bg-transparent">
        <Image src={videoBtn} alt="video_icon" width={40} height={40} />
      </button>
      <Minibar desc_name="Видеообзор" desc_content={desc_content} />
    </div>
  )
}

export default MinibarVideo
