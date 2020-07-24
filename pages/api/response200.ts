import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ name: 'status 200' });
};
