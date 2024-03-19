import { Container, Grid } from "@mui/material";
import React from "react";
import { ComicCard } from "../comicCard/ComicCard";
import { Props } from "interfaces/propsGrid";

export const ComicGrid = ({ initialComics }: Props) => {
  return (
    <Container sx={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <Grid
        sx={{ margin: 5 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {initialComics.map((comic: any) => (
          <Grid item xs={2} sm={4} md={4} key={comic.id}>
            <ComicCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              image={comic.images[0] ?? comic.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
