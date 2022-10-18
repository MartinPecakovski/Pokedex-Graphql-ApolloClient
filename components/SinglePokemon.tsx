import { Col, Progress, Row } from "antd";
import Image from "next/image";
import React from "react";
import { map } from "../helpers/map";
import { SinglePokemonProps } from "../helpers/types";
import {
  DetailsPokemon,
  DexHeading,
  Div,
  Heading,
  ImageWrapper,
  SingleWrapper,
  WrapperInner,
} from "../styles/styles";
import "antd/dist/antd.css";

function percentage(partialValue: number, totalValue: number) {
  return (100 * partialValue) / totalValue;
}

const SinglePokemon = ({
  height,
  id,
  name,
  weight,
  pokemon_v2_pokemontypes,
  pokemon_v2_pokemonabilities,
  pokemon_v2_pokemonstats,
}: SinglePokemonProps) => {
  return (
    <SingleWrapper>
      <DexHeading>
        <span
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#30A7D7",
            color: "white",
            textTransform:"capitalize"
          }}
        >
          #{id} {name}
        </span>
      </DexHeading>
      <WrapperInner>
        <Row  justify="center" align="middle">
        <Col sm={24} lg={13}>
        <ImageWrapper style={{textAlign:"center"}}>
          <Image
            width={700}
            height={700}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
              .toString()
              .padStart(3, "0")}.png`}
            alt=""
          />
        </ImageWrapper>
        </Col>

        <Col sm={24} lg={11}>
        <DetailsPokemon>
          <Div>
            <div>Weight: {weight}kg</div>
            <div>Height: {height}cm</div>
            <Heading>Type: </Heading>
            {pokemon_v2_pokemontypes?.map((item) => (
              <Div
                style={{ marginBottom: "4px" }}
                key={item.pokemon_v2_type.id}
              >
                <div
                  style={{
                    border: `1px solid ${map.get(item.pokemon_v2_type.name)}`,
                    padding: "5px",
                    borderRadius: "5px",
                    color: "white",
                    backgroundColor: map.get(item.pokemon_v2_type.name),
                  }}
                >
                  {item.pokemon_v2_type.name}
                </div>
              </Div>
            ))}
          </Div>
          <Heading>Stats:</Heading>
          <Div>
            {pokemon_v2_pokemonstats?.map((stat) => (
              <Div
                style={{
                  marginBottom: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                key={stat.pokemon_v2_stat.id}
              >
                <span style={{ fontSize: "18px" }}>
                  {stat.pokemon_v2_stat.name}:
                </span>{" "}
                <Progress
                  style={{ width: "60%" }}
                  percent={Math.round(percentage(stat.base_stat, 200))}
                />
              </Div>
            ))}
          </Div>
          <Heading>Abilities:</Heading>
          <Div>
            {pokemon_v2_pokemonabilities?.map((ability) => (
              <div
                style={{ marginBottom: "4px" }}
                key={ability.pokemon_v2_ability.id}
              >
                {ability.pokemon_v2_ability.name}
              </div>
            ))}
          </Div>
        </DetailsPokemon>
        </Col>
        </Row>
      </WrapperInner>
    </SingleWrapper>
  );
};

export default SinglePokemon;
