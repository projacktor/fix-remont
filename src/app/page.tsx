'use client'

import Image from "next/image";

import style from "@/styles/home.module.sass"

import SeoPart from "@/components/widgets/SEO/SeoPart";
import Megabox from "@/components/widgets/Megabox/Megabox";


export default function Home() {
  return (
      <main className="home_content">
        <Megabox/>
        <SeoPart/>
      </main>
  );
}
