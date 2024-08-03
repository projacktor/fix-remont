import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface SocialMediaBulletProps {
    image: string,
    name: string,
    sub: string,
    link: string
}

function SocialMediaBullet({image, name, sub, link}: SocialMediaBulletProps) {
    return (
        <Link
            className="grid grid-cols-3 items-center w-full rounded-3xl bg-white p-8"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image src={image} alt={name} width={60} height={60}/>
            <h4 className="font-bold text-[39px] leading-[123%] tracking-tight -translate-x-12">{name}</h4>
            <p>{sub} подписчиков</p>
        </Link>
    );
}

export default SocialMediaBullet;