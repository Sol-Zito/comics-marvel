import { SeriesList } from "dh-marvel/features/marvel/characters.type";
import React, { FC, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  comics: SeriesList;
  character: string;
}

const ComicList: FC<Props> = ({ comics, character }) => {
  const [expanded, setExpanded] = useState(false);
  const comicsList = comics.items.filter((item, index) => index < 6);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {`${character}'s comics:`}
      </AccordionSummary>
      <Box sx={{ flexGrow: 2, margin: 2 }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {comicsList.map((comic) => (
            <Grid item xs={2} sm={4} md={4} key={comic.name}>
              <Typography variant="body1">{comic.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Accordion>
  );
};

export default ComicList;
