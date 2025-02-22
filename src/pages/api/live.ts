import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const success = Math.random() < 0.5;
  console.log("live status:", success);
  res.status(200).json({ success: success });
}
