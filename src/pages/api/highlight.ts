import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const featuredItems = [
    {
      id: "",
      url: "https://picsum.photos/800/400?random=1",
      name: "Featured Item 1",
    },
    {
      id: "",
      url: "https://picsum.photos/800/400?random=2",
      name: "Featured Item 2",
    },
    {
      id: "",
      url: "https://picsum.photos/800/400?random=3",
      name: "Featured Item 3",
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 1500));
  res.status(200).json(featuredItems);
}
