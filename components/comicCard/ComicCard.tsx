import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useRouter } from "next/router";
import { PropsCard } from "interfaces/propsCard";

export const ComicCard: FC<PropsCard> = ({ id, image, title }) => {
  const router = useRouter();
  const imageUrl = `${image?.path}.${image?.extension}`;
  const handlePageChange = () => {
    router.push(`/comics/${id}`);
  };

  const handlePageCheckout = () => {
    router.push(`/checkout/${id}`);
  };

  return (
    <Card sx={{ maxWidth: "auto", height: 300, backgroundColor: "grey" }}>
      <CardMedia
        component="img"
        alt={`${title} image`}
        height="180"
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title.substring(0, 30)}...
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={handlePageCheckout}
          size="small"
          variant="contained"
          sx={{ backgroundColor: "GrayText" }}
        >
          Buy
        </Button>
        <Button
          onClick={handlePageChange}
          size="small"
          variant="contained"
          sx={{ backgroundColor: "GrayText" }}
        >
          See details
        </Button>
      </CardActions>
    </Card>
  );
};
