import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Die from '@/components/entities/Die/Die'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'
import WorksGallery from '@/components/widgets/Works Gallery/WorksGallery'
import Consulting from '@/components/widgets/Consulting/Consulting'
import SeoPart from '@/components/widgets/SEO/SeoPart'
import Minibar from '@/components/entities/Minibar/Minibar'
import MinibarVideo from '@/components/entities/MinibarVideo/MinibarVideo'
import VideoGallery from '@/components/widgets/Video Gallery/VideoGallery'
import projPic1 from '../../../../../public/assets/img/projects img/projPicture1.png'
import projPic2 from '../../../../../public/assets/img/projects img/projPicture2.png'
import React from 'react'

interface Project {
  id: string
  title: string
  duration: string
  cost: string
  area: string
  videoDuration: string
  description: string
  task: React.ReactNode
  result: string
}

interface ProjectPageProps {
  project: Project
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const router = useRouter()

  // Если страница находится в состоянии fallback
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex h-full w-full flex-col items-center">
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-start gap-4 p-4">
          <h1 className="heading">{project.title}</h1>
          <div className="flex flex-row items-center justify-around gap-8">
            <Minibar desc_name="Сроки" desc_content={project.duration} />
            <Minibar desc_name="Стоимость" desc_content={project.cost} />
            <Minibar desc_name="Площадь объекта" desc_content={project.area} />
            <MinibarVideo desc_content={project.videoDuration} />
          </div>
          <Image src={projPic1} alt="Project picture" />
          <div className="relative bottom-[45rem] left-12 flex items-center">
            <Die text="СТРОИТЕЛЬСТВО ДОМОВ" />
          </div>
          <div className="my-4 flex w-full justify-center">
            <VideoGallery />
          </div>
          <Image src={projPic2} alt="projectPic2" />
          <div className="flex w-full flex-col p-8">
            <h2>Задача:</h2>
            {project.task}
          </div>
          <div className="flex w-full flex-col gap-5 p-8">
            <h2 className="text-lg font-bold">Результат:</h2>
            <Image src={projPic2} alt="projectPic2" className="w-11/12" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col items-center">
        <h1 className={'heading'}>Другие реализованные проекты</h1>
        <WorksGallery />
        <CheckButton text="Смотреть все портфолио" link="/portfolio" />
      </div>
      <Consulting />
      <SeoPart />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Здесь получите все возможные `id` для проектов
  const res = await fetch('https://api.example.com/projects')
  const projects = await res.json()

  const paths = projects.map((project: { id: string }) => ({
    params: { id: project.id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!
  const res = await fetch(`https://api.example.com/projects/${id}`)
  const project = await res.json()

  return {
    props: {
      project
    }
  }
}

export default ProjectPage
