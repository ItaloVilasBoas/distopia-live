import { Carousel } from "../../content/Carousel";
import { TweetCard } from "./TweetCard";

const featuredItems = Array.from({ length: 30 }, (_, index) => ({
  imageUrl: `https://picsum.photos/800/400?random=${index + 1}`,
  title: `Featured Item ${index + 1}`,
  description: `Description for featured item ${index + 1}`
}));

export default function Tweets() {
  return (
    <div className="min-h-screen bg-black px-32 pt-16">
      <h3 className="text-3xl font-bold text-white mb-6">Tweets recentes</h3>
      <Carousel widthValue="w-96"
        items={featuredItems.map((item, index) => (
          <TweetCard key={index} {...item} />
        ))}
      />
    </div>
  );
}
