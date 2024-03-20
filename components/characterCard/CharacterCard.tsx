import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Character } from "dh-marvel/features/marvel/characters.type";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useRouter } from "next/router";

export const CharacterCard = ({
  name,
  description,
  thumbnail,
  series,
}: Character) => {
  const route = useRouter();
  const handleClickGoBack = () => {
    route.back();
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 600, maxHeight: 500, backgroundColor: "grey" }}>
        <CardContent>
          <ArrowBackIcon
            fontSize="large"
            color="secondary"
            onClick={handleClickGoBack}
            sx={{
              cursor: "pointer",
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
          />
        </CardContent>
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            {name}
          </Typography>
          <CardMedia
            component="img"
            alt={`${name} image`}
            height="250"
            image={`${thumbnail.path}.${thumbnail.extension}`}
          />
          <Typography variant="body1" color="text.secondary">
            Description: {description ?? "No description available"}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>Series:</Typography>
          {series.items.map((serie) => (
            <Typography>{serie.name}</Typography>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};
