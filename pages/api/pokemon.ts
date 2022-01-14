import type { NextApiRequest, NextApiResponse } from 'next'
import type { PokemonOption, PokemonListResult } from '../../models/PokemonOption';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonOption[]>
) {
  const result: Response = await fetch(process.env.API_ENDPOINT);
  const pokemon: PokemonListResult = await result.json();
  res.status(200).json(pokemon.results);
}
