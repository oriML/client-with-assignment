import { fetchImagesApi } from '../../../config'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Promise<Response>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const result = await fetch(fetchImagesApi).then(res=> res.json())
   res.status(200).json(result);

}
