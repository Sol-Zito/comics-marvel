import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
export const ArrowBack = () => {
  const route = useRouter();
  const handleClickGoBack = () => {
    route.back();
  };
  return (
    <ArrowBackIcon
      fontSize="medium"
      color="secondary"
      onClick={handleClickGoBack}
    />
  );
};
