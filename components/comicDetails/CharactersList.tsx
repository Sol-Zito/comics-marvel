import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Characters } from "dh-marvel/features/marvel/comics.type";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

export const CharactersList = (characters: Characters) => {
  //   const route = useRouter();

  //   const handleViewCharacter = (resourceURI: string) => {
  //     const id = getIdCharacter(resourceURI);
  //     route.push(`/character/${id}`);
  //   };
  //   const getIdCharacter = (resourceURI: string) => {
  //     const arr = resourceURI.split("/");
  //     const idCharacter = arr[arr.length - 1];
  //     return idCharacter;
  //   };
  const [expanded, setExpanded] = useState(false);
  const available = characters.items.length > 0;
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      disabled={!available}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ color: "text.secondary", margin: "0 auto" }}>
          {characters.items.length > 0
            ? "Select a character"
            : "No characters available"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {characters.items.map((character) => (
          <Typography key={character.name}>
            <Link
              href={`/personajes/${character.resourceURI.split("/").pop()}`}
              passHref
            >
              {character.name}
            </Link>
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
{
  /* {characters.items.length ? (
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
            "Without characters"
          )} */
}
