export type Pokemon = {
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    moves: Move[],
    types: Type[],
    stats: StatBase[],
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