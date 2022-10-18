import { gql } from "@apollo/client";

export const GET_ALL_POKEMON_DATA = gql`
  query PokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      name
      height
      weight
      id
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
          id
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          id
        }
      }
    }
    
  }
`;

export const GET_POKEMON = gql`
query AllPokemon ( $offset:Int, $limit:Int ){
  pokemon_v2_pokemon (limit:$limit, offset:$offset){
    id
    name
  }
}
`;
