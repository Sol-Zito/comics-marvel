import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import { ButtonBase, Container, Grid, Paper, styled } from "@mui/material";

/**La página deberá indicar al menos la siguiente información:
 * Nombre del comic
 * Descripción del comic
 * Imagen principal
 * Precio
 * Precio anterior
 * Botón de compra: en función de la disponibilidad de stock
 * Si hay stock, el botón debe aparecer habilitado y ser funcional
 * Si no hay stock, el botón debe estar deshabilitado y en gris, con el mensaje: Sin stock disponible
 * Lista de personajes asociados al cómic, con links a la página de cada personaje */
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const ComicDetails: React.FC<Comics> = ({
  title,
  images,
  oldPrice,
  price,
  description,
  stock,
  thumbnail,
}) => {
  const imageApi = images[0] ?? thumbnail;
  const imageUrl = `${imageApi?.path}.${imageApi?.extension}`;

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: 345,
          height: "auto",
        }}
      >
        <CardMedia
          component="img"
          alt={`${title}`}
          height="auto"
          image={imageUrl ? imageUrl : ""}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {description}
          </Typography>
          <Typography
            variant="inherit"
            color="gray"
            sx={{ textDecoration: "line-through" }}
          >
            Old price: {oldPrice}
          </Typography>
          <Typography variant="h6" color="blue">
            Price: {price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            //   onClick={handleComprar}
            size="small"
            variant="contained"
            disabled={stock == 0}
            sx={{ width: "100%" }}
          >
            {stock == 0 ? "Sin Stock" : "Comprar"}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
