export type Pokemon = {
    name: string,
    height: number,
    weight: number,
    moves: MoveContainer[],
    types: Type[],
    stats: StatBase[],
    sprites: Sprites,
}

type MoveContainer = {
    move: Move
}

type Move = {
    name: string,
}

type Type = {
    slot: number,
    type: TypeSlot
}

type TypeSlot = {
    name: string,
}

type StatBase = {
    base_stat: number,
    effort: number,
    stat: Stat
}

type Stat = {
    name: string,
}

type Sprites = {
    front_default: string,
    front_shiny: string
}