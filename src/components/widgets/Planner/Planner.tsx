import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Step {
  description: string
  time: string
  newP2Text: string
}

interface PlannerProps {
  planner_img: string
  time_text: string
  p1_text: string
  steps: Step[]
  p2_text: string
  link_text: string
}

function Planner({ planner_img, time_text, p1_text, steps, p2_text, link_text }: PlannerProps) {
  const [currentP2Text, setCurrentP2Text] = useState(p2_text)

  return (
    <section className="flex w-full flex-row justify-between rounded-3xl bg-color-dark px-3 py-16">
      <div className="flex w-1/2 flex-col justify-between gap-6 pl-12">
        <div className="flex flex-col gap-3 text-white">
          <h2 className="heading text-white">
            Всего <span className="orange-bold">4 шага и {time_text}</span> <br /> личного времени
          </h2>
          <p className="font-normal">отделяют вас от {p1_text}</p>
        </div>
        <div className="flex min-h-[60%] w-4/5 flex-col justify-around gap-4 self-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex h-20 w-full cursor-pointer items-center justify-between rounded-2xl border border-gray-300 p-11 text-white opacity-30 transition-opacity hover:bg-white hover:text-black hover:opacity-100"
              onClick={() => setCurrentP2Text(step.newP2Text)} // Обновляем p2_text при клике
            >
              <p className="text w-64 font-medium">{step.description}</p>
              <p className="text font-medium">{step.time && `${step.time} мин`}</p>
            </div>
          ))}
        </div>
        <Link href="#" className="font-semibold text-color-orange underline">
          {link_text}
        </Link>
      </div>
      <div className="flex w-1/2 flex-col items-start justify-center">
        <Image
          src={planner_img as unknown as string}
          alt="FIX-remont_planner"
          className="w-11/12"
        />
        <p className="mt-4 pr-8 text-2xl font-medium text-white">{currentP2Text}</p>
      </div>
    </section>
  )
}

export default Planner
