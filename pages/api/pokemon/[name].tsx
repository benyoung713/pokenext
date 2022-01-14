import type { NextApiRequest, NextApiResponse } from 'next';
import type { Pokemon } from '../../../models/Pokemon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon>
) {
  const { name } = req.query;
  const result: Response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
  const pokemon: Pokemon = await result.json();
  res.status(200).json(pokemon);
}