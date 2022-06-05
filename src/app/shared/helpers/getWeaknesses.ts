import { PokemonResistances, PokemonWeaknesses } from "src/app/core/static-data";

export const getWeaknesses = (types: string[], abilities?: string[]): string[] => {
    let weaknesses: string[] = [];
    types.forEach((x) => {
        const typeWeaknesses: string[] | undefined = PokemonWeaknesses.get(x);
        if (!typeWeaknesses) {
            return;
        }
        weaknesses = [...new Set([...weaknesses, ...typeWeaknesses])];
    });
    
    types.forEach((x, i) => {
        const resistances: string[] | undefined = PokemonResistances.get(x);
        if (!resistances) {
            return;
        }

        resistances.forEach((x) => {
            if (weaknesses.includes(x)) {
                const index = weaknesses.indexOf(x);
                weaknesses.splice(index, 1);
            }
        });
    });

    switch (true) {
        case abilities?.includes('levitate'): {
            const index = weaknesses.indexOf('ground');
            weaknesses.splice(index, 1);
        }
    }
    return [...new Set(weaknesses)];
}