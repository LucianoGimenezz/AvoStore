import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getAllAvos = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const db = new DB()
  const id: any = request.query.id
  const avo = await db.getById(id)

  response.status(200).json(avo)
}

export default getAllAvos
