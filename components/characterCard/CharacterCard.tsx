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
import ComicList from "./ComicList";

export const CharacterCard = ({
  name,
  description,
  thumbnail,
  series,
  stories,
  comics,
}: Character) => {
  const route = useRouter();
  const handleClickGoBack = () => {
    route.back();
  };

  return (
    <>
      <ArrowBackIcon
        fontSize="medium"
        color="secondary"
        onClick={handleClickGoBack}
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "auto",
          height: "auto",
        }}
      >
        <Card
          sx={{
            width: "auto",
            maxHeight: "auto",
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
          <CardContent>
            <CardMedia
              component="img"
              alt={`${name} image`}
              image={`${thumbnail.path}.${thumbnail.extension}`}
              sx={{ width: 300 }}
            />
          </CardContent>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Description:
              {description.length > 0
                ? description
                : " No description available"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Series in which appears: {series.available}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Stories in which appears: {stories.available}
            </Typography>
          </CardContent>
          {/* Comics */}
          <CardContent>
            <ComicList comics={comics} character={name} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
