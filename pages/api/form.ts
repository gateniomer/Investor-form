// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  data: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const details = JSON.parse(req.body);
  res.status(200).json({ success: true, data: details });
}
