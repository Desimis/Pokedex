import { GenericDetail } from "../shared/interfaces/generic-detail.interface";

export interface GetPokemonByNameResponse {
    abilities: Ability[];
    base_experience: number;
    forms: GenericDetail[];
    game_indices: GameIndice[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: GenericDetail;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Ability {
    ability: GenericDetail;
    is_hidden: boolean;
    slot: number;
}

interface GameIndice {
    game_index: number;
    version: GenericDetail;
}

interface Move {
    move: GenericDetail;
    version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: GenericDetail;
    version_group: GenericDetail;
}

interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: GenericDetail;
}

interface Type {
    slot: number;
    type: GenericDetail;
}