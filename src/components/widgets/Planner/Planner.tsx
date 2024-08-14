import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PlannerProps {
  planner_img: string
  time_text: string
  p1_text: string
  step1_description: string
  step1_time: string
  step2_description: string
  step2_time: string
  step3_description: string
  step3_time: string
  step4_description: string
  p2_text: string
  link_text: string
}

function Planner({
  planner_img,
  time_text,
  p1_text,
  step1_description,
  step1_time,
  step2_description,
  step2_time,
  step3_description,
  step3_time,
  step4_description,
  p2_text,
  link_text
}: PlannerProps) {
  return (
    <div className="flex w-full flex-row rounded-3xl bg-color-dark px-3 py-16">
      <div className="flex w-1/2 flex-col gap-6 pl-12">
        <div className="flex flex-col gap-3 text-white">
          <h2 className="heading text-white">
            Всего <span className="orange-bold">4 шага и {time_text}</span> <br /> личного времени
          </h2>
          <p className="font-normal">отделяют вас от {p1_text}</p>
        </div>
        <div className="flex w-4/5 flex-col gap-4">
          {[step1_description, step2_description, step3_description, step4_description].map(
            (desc, index) => (
              <div
                key={index}
                className="flex h-20 w-full items-center justify-between rounded-2xl border border-gray-300 px-10 text-white opacity-30 transition-opacity hover:bg-white hover:text-black hover:opacity-100"
              >
                <p className="text w-64 font-medium">{desc}</p>
                <p className="text font-medium">
                  {[step1_time, step2_time, step3_time][index] &&
                    `${[step1_time, step2_time, step3_time][index]} мин`}
                </p>
              </div>
            )
          )}
          <div className="mt-12">
            <Link href="#" className="font-semibold text-color-orange underline">
              {link_text}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col items-start justify-center">
        <Image
          src={planner_img as unknown as string}
          alt="FIX-remont_planner"
          className="w-11/12"
        />
        <p className="mt-4 text-2xl font-medium text-white">{p2_text}</p>
      </div>
    </div>
  )
}

export default Planner
