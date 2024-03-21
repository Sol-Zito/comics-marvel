import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqsType } from "dh-marvel/components/faqs/faqsData";
import { GetStaticProps, NextPage } from "next";
import React, { SyntheticEvent, useState } from "react";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
interface Props {
  faqs: FaqsType[];
}
const Faqs: NextPage<Props> = ({ faqs }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <BodySingle title={"Preguntas Frecuentes"}>
        <div>
          {faqs?.map((fq) => (
            <Accordion
              key={fq.id}
              expanded={expanded === `${fq.id}`}
              onChange={handleChange(`${fq.id}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${fq.id}-content`}
                id={`panel${fq.id}-header`}
              >
                {fq.question}
              </AccordionSummary>
              <AccordionDetails>{fq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </BodySingle>
    </>
  );
};

export default Faqs;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/faqs");
  const faqs = await response.json();
  return {
    props: {
      faqs,
    },
  };
};
