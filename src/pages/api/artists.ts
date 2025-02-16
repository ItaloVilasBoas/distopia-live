import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const artistItems = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/800/800?random=1",
      name: "Mineiro",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/800/800?random=2",
      name: "Adinolfi",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/800/800?random=3",
      name: "VilCinico",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/800/800?random=4",
      name: "Elkian",
    },
    {
      id: 5,
      imageUrl: "https://picsum.photos/800/800?random=5",
      name: "Kim Jung Gi",
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 1500));
  res.status(200).json({ content: artistItems });
}
