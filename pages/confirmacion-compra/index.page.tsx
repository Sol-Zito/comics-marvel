import { Typography } from "@mui/material";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import React from "react";
/**Mostrar una sección superior verde con el mensaje `Que disfrutes tu compra`
* Deberá disponer de la información del comic (Nombre e imagen principal) de forma destacada y grande.
* Deberá mostrar una sección inferior, con los datos personales, la dirección de entrega y el precio pagado por el cómic.
* Ten en cuenta, lo que puede suceder si se ingresa a este sitio directamente por URL. Quizá puedas redireccionar al Home en este caso.
* **No precisa** ser indexable por los motores de búsqueda.
* Esta página debera utilizar el [Layout de Compra](#layout-de-compra)

Mostrar una sección verde con el mensaje “Que disfrutes tu compra”, junto a la información del cómic (nombre e imagen) en grande,
Una sección inferior, con los datos personales, la dirección de entrega, y el precio pagado por el cómic.
Esta página deberá utilizar el Layout de compra, que contiene un encabezado y un pie de página bien simple, con el objetivo de no distraer al usuario del proceso de compra.
 */
export const ConfirmacionCompra = () => {
  return (
    <LayoutCheckout>
      <BodySingle title="Confirmacion de compra">
        <Typography>Que disfrutes tu compra</Typography>
      </BodySingle>
    </LayoutCheckout>
  );
};
