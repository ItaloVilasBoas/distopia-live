import { Carousel } from "./Carousel";
import { FeatureCard } from "./FeatureCard";

import Videos from "../sections/videos/videos";
const featuredItems = [
  {
    imageUrl: 'https://picsum.photos/800/400?random=1',
    title: 'Featured Item 1',
    description: 'Description for featured item 1'
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=2',
    title: 'Featured Item 2',
    description: 'Description for featured item 2'
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=3',
    title: 'Featured Item 3',
    description: 'Description for featured item 3'
  }
];

export default function Content() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="pb-16">
        <h1 className="text-4xl font-bold text-white mb-8">Destaques</h1>
        <Carousel widthValue="w-full"
          items={featuredItems.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        />
      </div>
      <Videos />
    </div>
  );
}
