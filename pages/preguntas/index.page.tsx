import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqsType } from "dh-marvel/components/faqs/faqsData";
import { GetStaticProps, NextPage } from "next";
import React, { SyntheticEvent, useState } from "react";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
/** La Página de las FAQs deberia ser la más simple de las seis.
    - Si te animás a Storybook, podes crear un componente Faqs junto con su story, para visualizarlo
    - El mismo deberia recibir un array de Faqs, un objeto que deberiamos tipar
    - Renderizar por cada FAQ un item del `accordion`
    - Con el componente listo, ya podemos proceder a utilizarlo dentro de las página
  - Obteniendo el array de faqs del JSON, podemos proceder a importar nuestro componente y enviarle esa data, y ya deberíamos tener la primer página.
  - Deberiamos resolver cuál es el mejor tipo de renderización para esta página para asegurarnos que el contenido sea indexable por los buscadores. Recordá que 
  siempre puedes utilizar el Chrome Inspector para verificarlo.
  - Finalmente, si bien no es obligatorio, este es un componente simple para testear, para mantener alto nuestro coverage y dar por cerrada esta función.
  - Subimos nuestro contenido y verificamos que funcione correctamente en Vercel, antes de pasar a la próxima etapa.
  - Listo, ya tenemos 1 de 6! no te olvides de pushear estos cambios, y si estas usando una estrategia de branching, de mergear este branch con main antes de continuar.  */
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
