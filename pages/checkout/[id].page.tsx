import * as React from "react";
import { NextPage, GetServerSideProps } from "next";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { Grid, Typography } from "@mui/material";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import ComicCheckout from "dh-marvel/components/comicCard/ComicCheckout";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";

interface Props {
  comic: Comics;
  id: number;
}

const CheckoutPage: NextPage<Props> = ({ comic, id }) => {
  return (
    <LayoutCheckout>
      <Typography variant="h4" align="center" mt={2}>
        Checkout:
      </Typography>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ComicCheckout {...comic} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          {/* {comic?.stock > 0 ? (
            <FormProvider {...methods}>
              <Forms onSubmit={onSubmit} />
            </FormProvider>
          ) : (
            <Typography variant="h4" align="center" mt={2}>
             Sorry, there isn't stock available at the moment...
            </Typography>
          )} */}
        </Grid>
      </Grid>
    </LayoutCheckout>
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
