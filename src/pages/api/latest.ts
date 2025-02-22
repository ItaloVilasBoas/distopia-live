import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const latestMangas = [1, 2, 3, 4, 5].map((i) => ({
    imageUrl: `https://picsum.photos/800/400?random=${i}`,
    name: `Item ${i}`,
  }));
  const latestAnimation = [6, 7, 8, 9, 10].map((i) => ({
    imageUrl: `https://picsum.photos/800/400?random=${i}`,
    name: `Item ${i}`,
  }));
  const latestGallery = [11, 12, 13, 14, 15].map((i) => ({
    imageUrl: `https://picsum.photos/800/400?random=${i}`,
    name: `Item ${i}`,
  }));

  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (req.query.type === "manga")
    res.status(200).json({ content: latestMangas });
  if (req.query.type === "animation")
    res.status(200).json({ content: latestAnimation });
  if (req.query.type === "gallery")
    res.status(200).json({ content: latestGallery });
  res.status(200).json({ content: [] });
}
