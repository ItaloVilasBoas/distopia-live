"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";

interface ListOfElementsProps {
  params: Promise<{ slug: string }>;
}

interface Art {
  cover: string;
  name: string
}

export default function ListOfElements({ params }: ListOfElementsProps) {
  const resolvedParams = use(params);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);
  const latestItems = useRef([] as Art[]);
  const pageable = useRef({ nextToken: undefined as string | undefined, size: 8 })
  const availableRoutes: { [key: string]: string } = {
    animation: "animações",
    manga: "mangás",
    gallery: "galeria",
  };
  const nomePagina = availableRoutes.hasOwnProperty(resolvedParams.slug)
    ? availableRoutes[resolvedParams.slug]
    : "";
  if (nomePagina === "") redirect("/arts");

  useEffect(() => {
    const handleScroll = () => checkSectionInView();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const checkSectionInView = () => {
    const loadingRefCurr = loadingRef.current;
    if (!loadingRefCurr) return;

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const elementTop =
      loadingRefCurr.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition >= elementTop - 300 && !loading) {
      if(pageable.current.nextToken === '') return
      setLoading(true);
      fetchItems();
    }
  };

  const fetchItems = () => {
    const params = new URLSearchParams({
      type: resolvedParams.slug,
      size: pageable.current.size.toString(),
    });
    if(pageable.current.nextToken) params.set("nextToken", pageable.current.nextToken);
    fetch(`/api/arts?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        latestItems.current.push(...data.content);
        pageable.current.nextToken = data.nextToken ?? '';
        setLoading(false);
      });
  };

  return (
    <section className="bg-black">
      <div className="upper-teeth-white"></div>
      <div className="flex justify-between justify-self-center relative bottom-24">
        <div className="relative">
          <span className="text-5xl font-extrabold text-white dystopian">
            {nomePagina}.
          </span>
          <span className="text-5xl font-extrabold text-white absolute top-6 right-0 dystopian">
            {nomePagina}.
          </span>
          <span className="text-5xl font-extrabold text-white absolute bottom-6 right-0 dystopian">
            {nomePagina}.
          </span>
        </div>
      </div>
      <div className="py-5 px-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
        {latestItems.current.map((item, index) => (<div
            key={index}
            className="relative hover:scale-105 transition-all duration-500 cursor-pointer justify-self-center"
          >
            <Image
              src={item.cover}
              alt={item.name}
              width={600}
              height={900}
              className="h-96 w-72 object-cover rounded"
            />
            <span className="absolute bottom-2 left-2 text-white">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative top-14">
        <div
          ref={loadingRef}
          className={`${loading ? "bg-white rounded-full animate-bounce" : "bg-black"} flex w-24 h-24 absolute`}
        ></div>
      </div>
      <div className="bottom-teeth-white"></div>
    </section>
  );
}
