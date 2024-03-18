import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { PropsCard } from "interfaces/propsCard";

export const ComicCard = ({ id, image, title }: PropsCard) => {
  const router = useRouter();
  const imageUrl = `${image?.path}.${image?.extension}`;
  const handlePageChange = () => {
    router.push(`/comics/${id}`);
  };

  const handlePageCheckout = () => {
    router.push(`/checkout/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, height: 300, backgroundColor: "grey" }}>
      <CardMedia
        component="img"
        alt="imagen de Marvel"
        height="140"
        image={imageUrl ? imageUrl : ""}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>

      <Grid
        display="flex"
        justifyContent="center"
        alignSelf="center"
        alignItems="center"
      >
        <CardActions>
          <Button
            onClick={handlePageCheckout}
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#ed1d24" }}
          >
            Comprar
          </Button>
          <Button
            onClick={handlePageChange}
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#ed1d24" }}
          >
            Ver Detalle
          </Button>
        </CardActions>
      </Grid>
    </Card>
  );
};
