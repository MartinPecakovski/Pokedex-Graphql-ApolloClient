export type PokemonFiltered={
  pokemon_v2_pokemon:{
    id: number;
  name: string;
  }
}

export type Pokemon = {
  id: number;
  name: string;
};

export interface PokemonTypes {
  pokemon_v2_pokemon: {
    name: string;
    height: number;
    weight: number;
    id: number;
    pokemon_v2_pokemonabilities: {
      pokemon_v2_ability: {
        name: string;
        id: number;
      }[];
    };
    pokemon_v2_pokemonstats: {
      base_stat: number;
      pokemon_v2_stat: {
        name: string;
        id: number;
      }[];
    };
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        id: number;
        name: string;
      }[];
    };
  }[];
}




export type SinglePokemonProps = {
  name: string;
  id: number;
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      name: string;
      id: number;
    };
  }[];
  pokemon_v2_pokemonstats: {
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
      id: number;
    };
  }[];
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      id: number;
      name: string;
    };
  }[];
};


