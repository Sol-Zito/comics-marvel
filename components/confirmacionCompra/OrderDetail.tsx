import {
  Paper,
  Typography,
  Grid,
  CardMedia,
  Box,
  Button,
  CardHeader,
} from "@mui/material";
import React from "react";

interface Props {
  comicName: string;
  comicImage: string;
  address: string;
  price: string;
  onGoBackClick: () => void;
}

const OrderDetail = ({
  comicName,
  comicImage,
  address,
  price,
  onGoBackClick,
}: Props) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: 600,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifySelf: "center",
          flexWrap: "nowrap",
        }}
      >
        <Typography
          variant="h4"
          color="green"
          gutterBottom
          mb={3}
          sx={{
            "@media (max-width: 768px)": {
              fontSize: "24px",
            },
          }}
        >
          Que disfrutes tu compra!
        </Typography>
      </Box>

      <Grid
        container
        justifyContent="center"
        direction="column"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="secondary">
            Comic Comprado:
          </Typography>
          <CardHeader title={comicName} />
          <CardMedia
            component="img"
            alt={comicName}
            height="250"
            image={comicImage}
            title={comicName}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 5,
          }}
        >
          <Typography variant="h5" color="secondary">
            Datos personales:
          </Typography>
          <Typography variant="h5">
            Dirección de entrega: {address.toUpperCase()}
          </Typography>
          <Typography variant="h5">Importe: ${price}</Typography>
        </Grid>
        <Grid>
          <Button variant="contained" color="primary" onClick={onGoBackClick}>
            volver al inicio
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderDetail;
