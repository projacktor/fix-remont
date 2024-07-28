'use client'

import Image from "next/image";

import style from "@/styles/home.module.sass"

import SeoPart from "@/components/widgets/SEO/SeoPart";
import Megabox from "@/components/widgets/Megabox/Megabox";
import TapeSection from "@/components/shared/Tape Section/TapeSection";

import contactIcon from "../../public/assets/svg/TapeSection icons/contactIcon.svg";

export default function Home() {
  return (
      <main className="home_content">
        <Megabox />

        <div className={`flex flex-row gap-4`}>
            <TapeSection svg={contactIcon as string} altName={"contactIcon"} text={<p>Без визитов <br/> на объект</p>}/>
        </div>

        <SeoPart />

      </main>
  );
}
