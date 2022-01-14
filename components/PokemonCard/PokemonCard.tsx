import type { Pokemon } from '../../models/Pokemon';

type PokemonCardProps = {
    selectedPokemon: Pokemon,
}

const PokemonCard = ({ selectedPokemon }: PokemonCardProps) => (
    <div className="px-6 py-4 w-full">
        <div className="flex flex-row justify-between">
            <div className="font-bold text-xl mb-2 capitalize">{selectedPokemon.name}</div>
            <div className="font-bold text-xl mb-2 text-red-600">HP {selectedPokemon.stats.find(s => s.stat.name == "hp")?.base_stat}</div>
        </div>
        <div>
            <img className="w-auto m-auto" src={selectedPokemon.sprites.front_default} alt="selected Pokemon" />
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
            <div className="font-bold text-l mb-2">
                Types: {selectedPokemon.types.map((x, i) =>
                (<span key={x.type.name} className="capitalize">
                    {x.type.name + (i !== selectedPokemon.types.length - 1 ? ', ' : '')}
                </span>
                ))}
            </div>
            <div className="font-bold text-l mb-2">
                Moves: {selectedPokemon.moves.slice(0, 3).map((x, i) =>
                (<span key={x.move.name} className="capitalize">
                    {x.move.name + (i !== 2 ? ', ' : '')}
                </span>
                ))}
            </div>
            <p className="text-gray-700 text-base">
                Height: {selectedPokemon.height} Weight: {selectedPokemon.weight}
            </p>
        </div>

    </div>
);

export default PokemonCard;