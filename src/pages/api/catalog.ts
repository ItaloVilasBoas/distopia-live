import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

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
  res.status(200).json({ content: featuredItems });
}
