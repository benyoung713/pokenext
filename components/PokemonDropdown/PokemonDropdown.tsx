import { PokemonOption } from "../../models/PokemonOption";

type PokemonDropdownProps = {
    options: PokemonOption[],
    select: Function
}

const PokemonDropdown = ({ options, select }: PokemonDropdownProps) => (
    <select
        onChange={(e) => select(e.target.value)}
        className="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        <option selected>Choose a Pokemon</option>
        {options.map(x => <option className="capitalize" key={x.name} value={x.name}>{x.name}</option>)}
    </select>
);

export default PokemonDropdown;