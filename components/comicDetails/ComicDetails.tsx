import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import { CardHeader, Container } from "@mui/material";
import { CharactersList } from "./CharactersList";

export const ComicDetails: React.FC<Comics> = ({
  title,
  images,
  oldPrice,
  price,
  description,
  stock,
  thumbnail,
  pageCount,
  textObjects,
  creators,
  characters,
}) => {
  const imageApi = images[0] ?? thumbnail;
  const imageUrl = `${imageApi?.path}.${imageApi?.extension}`;

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: 500,
          height: "auto",
        }}
      >
        <CardHeader title={title} />
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={imageUrl ? imageUrl : ""}
        />
        {/* seccion descripcion: */}
        <CardContent>
          <Typography variant="body2" color="black">
            {description.length > 0
              ? `Description: ${description}`
              : `${textObjects[0]?.text.substring(0, 110)}...`}
          </Typography>

          {pageCount > 0 && (
            <Typography variant="body2" color="text.secondary">
              Pagecount: {pageCount}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {creators.available > 0
              ? `Creators: ${creators.items[0]?.name}, ${creators.items[1]?.name} ...`
              : `Creator: ${creators.items[0]?.name}.`}
          </Typography>
        </CardContent>
        {/* seccion personajes: */}
        <CharactersList {...characters} />
        {/* seccion precio */}
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="inherit"
            color="gray"
            sx={{ textDecoration: "line-through" }}
          >
            Old price: {oldPrice}
          </Typography>
          <Typography variant="h6" color="green">
            Price: {price}
          </Typography>
        </CardContent>

        <CardActions
          disableSpacing
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
