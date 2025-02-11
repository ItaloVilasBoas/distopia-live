import { FeatureCard } from "./FeatureCard";

import Videos from "../sections/videos/videos";
import Tweets from "../sections/tweets/tweets";
import { Carousel } from "../ui/carousel";

const featuredItems = [
  {
    imageUrl: 'https://picsum.photos/800/400?random=1',
    title: 'Featured Item 1',
    description: 'Description for featured item 1',
    tamanho: 3
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=2',
    title: 'Featured Item 2',
    description: 'Description for featured item 2',
    tamanho: 3
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=3',
    title: 'Featured Item 3',
    description: 'Description for featured item 3',
    tamanho: 3
  }
];

export default function Content() {
    return (
    <section className="min-h-screen bg-black p-8">
      <div className="pb-16">
        <h1 className="text-4xl font-bold text-white mb-8">Destaques</h1>
        <Carousel widthValue="w-full"
          items={featuredItems.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        />
      </div>

      <div className="flex justify-between justify-self-center items-center gap-6">
        <div className="flex gap-4">
          <div className="bg-[#feac2e] w-32 h-10"></div>
          <div className="bg-[#9e4688] w-16 h-10"></div>
          <div className="bg-white w-11 h-10"></div>
        </div>
        <div className="relative">
          <span className="text-5xl font-extrabold text-white dystopian">distopia.</span>
          <span className="text-5xl font-extrabold text-white absolute top-6 right-0 dystopian">distopia.</span>
          <span className="text-5xl font-extrabold text-white absolute bottom-6 right-0 dystopian">distopia.</span>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#9e4688] w-32 h-10"></div>
          <div className="bg-[#feac2e] w-16 h-10"></div>
          <div className="bg-white w-11 h-10"></div>
        </div>
      </div>

      <Videos />
      <Tweets />
    </section>
  );
}
