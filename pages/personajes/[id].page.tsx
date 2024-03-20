import { CharacterCard } from "dh-marvel/components/characterCard/CharacterCard";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Character } from "dh-marvel/features/marvel/characters.type";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

interface PropsCharacter {
  character: Character;
}

const CharacterPage: NextPage<PropsCharacter> = ({ character }) => {
  return (
    <>
      <Head>
        <title>DH-Marvel Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodySingle title="Personaje">
        <CharacterCard {...character} />
      </BodySingle>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.id);
  try {
    const character = await getCharacter(id);

    return {
      props: {
        character,
      },
    };
  } catch (error) {
    return {
      props: {
        character: [],
      },
    };
  }
};

export default CharacterPage;