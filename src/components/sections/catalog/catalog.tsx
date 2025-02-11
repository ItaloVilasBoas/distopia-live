import { Carousel } from "@/components/ui/carousel";
import { CatalogCard } from "./catalog_card";

const featuredItems = [
  {
    imageUrl: "https://picsum.photos/600/900?random=1",
    title: "Item 1",
  },
  {
    imageUrl: "https://picsum.photos/600/900?random=2",
    title: "Item 2",
  },
  {
    imageUrl: "https://picsum.photos/600/900?random=3",
    title: "Item 3",
  },
  {
    imageUrl: "https://picsum.photos/600/900?random=4",
    title: "Item 4",
  },
  {
    imageUrl: "https://picsum.photos/600/900?random=5",
    title: "Item 5",
  },
];

export default function Catalog() {
  return (
    <section className="px-48 py-20">
      <hr className="h-px my-8 bg-black border-0 mb-20" />
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-semibold dystopian">Catálogo</h2>
        <div className="bg-[#9e4688] w-8 h-5"></div>
        <div className="bg-[#9e4688] w-16 h-5"></div>
        <div className="bg-[#9e4688] w-32 h-5"></div>
      </div>
      <Carousel
        widthValue="w-56"
        items={featuredItems.map((item, index) => (
          <CatalogCard key={index} {...item} />
        ))}
      />
      <hr className="h-px my-8 bg-black border-0 mt-20" />
    </section>
  );
}
