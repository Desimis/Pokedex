import { GenericDetail } from "../shared/interfaces/generic-detail.interface";

export interface GetPokemonSpeciesResponse {
    egg_groups: GenericDetail[];
    base_happiness: number;
    capture_rate: 45;
    flavor_text_entries: FlavorText[];
    growth_rate: GenericDetail;
    evolution_chain: GenericDetail;
}

export interface FlavorText {
    flavor_text: string;
    language: GenericDetail;
    version: GenericDetail;
}