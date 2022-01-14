import type { NextApiRequest, NextApiResponse } from 'next'
import type { PokemonOption } from '../../models/PokemonOption';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonOption[]>
) {
  const result: Response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemon = await result.json();
  res.status(200).json([{name: 'Bulbasaur', url: 'example.com'}]);

}