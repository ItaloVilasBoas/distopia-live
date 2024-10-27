import { Carousel } from "../../content/Carousel";
import { VideoCard } from "./VideoCard";

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
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=4',
    title: 'Featured Item 4',
    description: 'Description for featured item 3'
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=5',
    title: 'Featured Item 5',
    description: 'Description for featured item 1'
  },
  {
    imageUrl: 'https://picsum.photos/800/400?random=6',
    title: 'Featured Item 6',
    description: 'Description for featured item 2'
  }
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-black px-32 pt-16">
      <h3 className="text-3xl font-bold text-white mb-6">Vídeos recentes</h3>
      <Carousel widthValue="w-96"
        items={featuredItems.map((item, index) => (
          <VideoCard key={index} {...item} />
        ))}
      />
    </div>
  );
}
