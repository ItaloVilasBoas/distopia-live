"use client";
import DistopiaLogoSVG from "@/components/ui/distopia_logo_svg";
import Loading from "@/components/ui/loading";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface LatestItem {
  id: number;
  cover: string;
  name: string;
}

export default function LatestUpdates() {
  const latestMangas = useRef([] as LatestItem[]);
  const [isLoadingMangas, setLoadingMangas] = useState(false);
  const latestAnimation = useRef([] as LatestItem[]);
  const [isLoadingAnimations, setLoadingAnimations] = useState(false);
  const latestGallery = useRef([] as LatestItem[]);
  const [isLoadingGallery, setLoadingGallery] = useState(false);
  const sections = [
    { title: 'Mangá', list: latestMangas, link: '/arts/manga', isLoading: isLoadingMangas },
    { title: 'Animação', list: latestAnimation, link: '/arts/animation', isLoading: isLoadingAnimations },
    { title: 'Galeria', list: latestGallery, link: '/arts/gallery', isLoading: isLoadingGallery },
  ];

  useEffect(() => {
    setLoadingMangas(true);
    fetch(`/api/latest-arts?type=manga`)
      .then((res) => res.json())
      .then((data) => {
        latestMangas.current.push(...data.content);
        setLoadingMangas(false);
      });

    setLoadingAnimations(true);
    fetch(`/api/latest-arts?type=animation`)
      .then((res) => res.json())
      .then((data) => {
        latestAnimation.current.push(...data.content);
        setLoadingAnimations(false);
      });

    setLoadingGallery(true);
    fetch(`/api/latest-arts?type=gallery`)
      .then((res) => res.json())
      .then((data) => {
        latestGallery.current.push(...data.content);
        setLoadingGallery(false);
      });
  }, []);

  return (
    <section>
      <div className="relative flex flex-col items-center mt-[-100px] mb-16">
        <div className="w-16 mb-8">
          <DistopiaLogoSVG />
        </div>
        <h2 className="text-3xl font-semibold dystopian">
          Ultimas Atualizações
        </h2>
      </div>

      <div className="flex w-full md:flex-row gap-8 md:gap-16 w-full md:w-2/3 justify-center justify-self-center">

        {sections.map((section, index) => (
          <div className="md:w-4/12 flex flex-col gap-2 items-center" key={index}>
            <span>{ section.title }</span>
            <Loading isLoading={section.isLoading} color="black"/>
            <div className="flex flex-col gap-2 max-h-[680px] overflow-hidden ">
              {section.list.current.map((item, index) => (
                <Image src={item.cover} alt={item.name} width={800} height={800} className="object-cover" key={index}/>
              ))}
            </div>
            { !section.isLoading && <Link href={section.link}>Veja mais</Link> }
          </div>
        ))}
      </div>
    </section>
  );
}
