import { Carousel } from "@/components/ui/carousel";
import { CatalogCard, FeaturedCardProps } from "./catalog_card";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/ui/loading";

export default function Catalog() {
  const featuredItems = useRef([] as FeaturedCardProps[])
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/catalog`)
      .then((res) => res.json())
      .then((data) => {
        featuredItems.current.push(...data.content);
        setLoading(false);
      });
  }, [])

  return (
    <section className="md:px-48 md:py-20 max-md:px-8">
      <hr className="h-px my-8 bg-black border-0 mb-20" />
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-semibold dystopian">Catálogo</h2>
        <div className="bg-[#9e4688] w-8 h-5"></div>
        <div className="bg-[#9e4688] w-16 h-5"></div>
        <div className="bg-[#9e4688] w-32 h-5"></div>
      </div>
      <Loading isLoading={isLoading} color="black"/>
      <Carousel
        widthValue="w-56"
        items={featuredItems.current.map((item, index) => (
          <CatalogCard key={index} {...item} />
        ))}
      />
      <hr className="h-px my-8 bg-black border-0 mt-20" />
    </section>
  );
}
