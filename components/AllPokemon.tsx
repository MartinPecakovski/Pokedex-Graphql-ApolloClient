import { Button, Col } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pokemon } from "../helpers/types";
import { DivLink } from "../styles/styles";

type Props = {};

const AllPokemon = ({ id, name }: Pokemon) => {
  return (
    <div>
      <Col>
      <Link href={`/pokemon/${id}`}>
        <DivLink>
          <p style={{ fontSize: "35px", textTransform: "capitalize", marginTop:"10px" }}>
            {name}
          </p>
          <Image
            width={320}
            height={320}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
              .toString()
              .padStart(3, "0")}.png`}
            alt="pokemon"
          />
          <p style={{ textAlign: "left", marginBottom: "7px" }}>
            <span
              style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#30A7D7",
                color: "white",
              }}
            >
              #{id}
            </span>
          </p>
        </DivLink>
      </Link>
      </Col>
    </div>
  );
};

export default AllPokemon;
