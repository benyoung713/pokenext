import type { NextApiRequest, NextApiResponse } from 'next';
import type { Pokemon } from '../../../models/Pokemon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon>
) {
  const { name } = req.query;
  try {
    const result: Response = await fetch(process.env.API_ENDPOINT + name);
    const pokemon: Pokemon = await result.json();
    res.status(200).json(pokemon);
  } catch {
    res.status(500);
  }
}