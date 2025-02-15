import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const size = parseInt(req.query.size as string, 10);
  const page = parseInt(req.query.page as string, 10);
  const totalPage = Math.floor(40 / size);
  const content = Array.from(
    { length: size },
    (_, index) => index + 1 + page * size,
  ).map((i) => ({
    imageUrl: `https://picsum.photos/600/900?random=${i}`,
    name: `Item ${i}`,
  }));
  const totalElements = content.length;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  res.status(200).json({ content, page, totalPage, totalElements, size });
}
