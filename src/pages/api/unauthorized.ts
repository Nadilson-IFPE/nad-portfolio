import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseBody = { message: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  res.status(401).json({ message: "Cannot access this endpoint with " + req.method })
}
