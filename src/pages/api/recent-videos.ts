import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const videos = Array.from({ length: 30 }, (_, index) => ({
    id: "klWSm-V9cMk",
    title: `Featured Item ${index + 1}`,
    description: `Description for featured item ${index + 1}`,
    thumbnails: {
      default: {
        url: `https://picsum.photos/800/400?random=${index + 1}`,
        width: 800,
        height: 400,
      },
    },
  }));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  res.status(200).json({ videos: videos });
}
