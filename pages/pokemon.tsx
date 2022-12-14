import Image from "next/image";
import { useQuery } from "@apollo/client";
import { Pokemon } from "../helpers/types";
import { GET_POKEMON } from "../helpers/queries";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Button, Row } from "antd";
import "antd/dist/antd.css";
import AllPokemon from "../components/AllPokemon";
import Head from "next/head";

const Pokemon = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_POKEMON, {
    variables: {
      offset: 0,
      limit: 10,
    },
    fetchPolicy:"cache-and-network",
    notifyOnNetworkStatusChange:true,
  });

  if (loading) return (<Loading />);

  if (error) return <Error />;

  return (
    data && !loading && (
      <div
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/5818333.jpg)",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5tZa9lwhOpzFzzIksgEXJXjGRlXbRyhQ9g&usqp=CAU"
        />
      </Head>

        <div
          style={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Image
            width={500}
            height={200}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            }
            alt={""}
          />
        </div>
        <Row justify="center" style={{width: "95%", marginLeft:"auto", marginRight:"auto"}}>
          
          {data.pokemon_v2_pokemon.map((pokemon: Pokemon) => (
            <AllPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
          ))}
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            type="primary"
            onClick={() => {
              fetchMore({
                variables: {
                  offset: data.pokemon_v2_pokemon.length,
                },
              });
            }}
          >
            Load more...
          </Button>
        </div>
      </div>
    )
  );
};

export default Pokemon;
