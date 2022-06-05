import { GenericDetail } from "../shared/interfaces/generic-detail.interface";

export interface GetPokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: GenericDetail[];
}