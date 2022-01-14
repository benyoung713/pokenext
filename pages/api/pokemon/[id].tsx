import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result: Response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
  const pokemon = await result.json();
  res.status(200).json(pokemon);
}