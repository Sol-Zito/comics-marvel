import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import React, { FC } from "react";

const ComicCheckout: FC<Comics> = ({ title, thumbnail, images, price }) => {
  const imageApi = images[0] ? images[0] : thumbnail;
  const imageUrl = `${imageApi?.path}.${imageApi?.extension}`;
  return (
    <Card
      sx={{
        maxHeight: 300,
        maxWidth: 226,
      }}
    >
      <CardMedia component="img" alt={title} height="150" image={imageUrl} />
      <CardContent>
        <Typography variant="h6">{title.substring(0, 30)}...</Typography>

        <Typography variant="h6" color="green">
          Price: {price}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ComicCheckout;
