import * as React from "react";
import Box from "@mui/material/Box";
import { NextPage, GetServerSideProps } from "next";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Typography } from "@mui/material";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import ComicCheckout from "dh-marvel/components/comicCard/ComicCheckout";

interface Props {
  comic: Comics;
  id: number;
}

const CheckoutPage: NextPage<Props> = ({ comic, id }) => {
  return (
    <Box>
      <ComicCheckout {...comic} />

      {comic.stock > 0 ? (
        <>
          <Typography>{comic.stock}</Typography>
        </>
      ) : (
        <Typography>
          Sorry, there isn't stock available at the moment...
        </Typography>
      )}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.id);
  const data = await getComic(id);
  return {
    props: {
      comic: data,
      id: id,
    },
  };
};

export default CheckoutPage;
