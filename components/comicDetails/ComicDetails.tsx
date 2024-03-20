import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import { CardHeader, Container } from "@mui/material";
import { useRouter } from "next/router";

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
  collections,
  series,
  creators,
  characters,
  stories,
}) => {
  const imageApi = images[0] ?? thumbnail;
  const imageUrl = `${imageApi?.path}.${imageApi?.extension}`;

  const route = useRouter();

  const handleViewCharacter = (resourceURI: string) => {
    const id = getIdCharacter(resourceURI);
    route.push(`/character/${id}`);
  };
  const getIdCharacter = (resourceURI: string) => {
    const arr = resourceURI.split("/");
    const idCharacter = arr[arr.length - 1];
    return idCharacter;
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: "auto",
          height: "auto",
        }}
      >
        <CardHeader title={title} />
        <CardMedia
          component="img"
          alt={title}
          height="auto"
          image={imageUrl ? imageUrl : ""}
        />
        <CardContent>
          <Typography variant="body2" color="black">
            {description.length > 0
              ? `Description: ${description}`
              : `${textObjects[0]?.text.substring(0, 110)}...`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pagecount: {pageCount <= 0 ? "unknown" : pageCount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Collections: {collections.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Series: {series.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {creators.available >= 0
              ? `Creator: ${creators.items[0]?.name}`
              : `Creators: ${creators.items[0]?.name},${creators.items[1]?.name} ...`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stories:{stories.items.length}
          </Typography>
        </CardContent>
        <CardContent>
          {characters.items.length ? (
            <>
              <Typography variant="body2" color="text.secondary">
                Characters: {characters.items.length}
              </Typography>
              {characters.items.map((character) => (
                <Button
                  onClick={() => handleViewCharacter(character.resourceURI)}
                >
                  {character.name}
                </Button>
              ))}
            </>
          ) : (
            ""
          )}
        </CardContent>
        <CardContent>
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
