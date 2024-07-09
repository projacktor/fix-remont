'use client'

import Image from "next/image";

import style from "@/styles/home.module.sass"

import SeoPart from "@/components/widgets/SEO/SeoPart";


export default function Home() {
  return (
      <main className="home_content">
        <SeoPart/>
      </main>
  );
}
