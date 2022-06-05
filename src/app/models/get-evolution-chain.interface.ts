import { GenericDetail } from "../shared/interfaces/generic-detail.interface";

export interface GetEvolutionChainResponse {
    baby_trigger_item: any;
    chain: EvolvesTo;
    id: number;
}

interface EvolvesTo {
    evolution_details: any[];
    evolves_to: EvolvesTo[];
    is_baby: boolean;
    species: GenericDetail;
}