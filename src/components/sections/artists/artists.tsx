import { Carousel } from "@/components/content/Carousel";
import ArtistCard from "./artist_card";

const artistItems = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/800/800?random=1',
    name: 'Mineiro',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/800/800?random=2',
    name: 'Adinolfi',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/800/800?random=3',
    name: 'VilCinico',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/800/800?random=4',
    name: 'Elkian',
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/800/800?random=5',
    name: 'Kim Jung Gi',
  }
];

export default function Artists() {
  return (
    <section className="bg-black">
      <div className="upper-teeth-white"></div>
      <div className="flex justify-between justify-self-center">
        <div className="relative">
          <span className="text-5xl font-extrabold text-white dystopian">distopia.</span>
          <span className="text-5xl font-extrabold text-white absolute top-6 right-0 dystopian">distopia.</span>
          <span className="text-5xl font-extrabold text-white absolute bottom-6 right-0 dystopian">distopia.</span>
        </div>
      </div>
      <div className="relative z-10">
        <div className="absolute left-0 right-0 top-[100px] bottom-0 m-auto w-[70%]">
          <h2 className="text-4xl font-bold text-white mb-8">Artistas</h2>
          <Carousel widthValue="w-60"
            items={artistItems.map((item, index) => (
              <ArtistCard key={index} {...item} />
            ))}
          />
        </div>
      </div>
      <div className="w-full h-[600px] bg-white mt-14 mb-14 [clip-path:polygon(0_70%,0_100%,45%_0,100%_100%,100%_100%,100%_70%,55%_0,100%_100%,45%_0)]"></div>
      <div className="bottom-teeth-white"></div>
    </section>
  );
}
