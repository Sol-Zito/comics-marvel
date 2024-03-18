import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { PropsCard } from "interfaces/propsCard";
import { ComicGrid } from "dh-marvel/components/comicGrid/ComicGrid";

/**En esta página se deberá mostrar un listado en forma de grilla de los cómics de Marvel disponibles para su visualización detallada y para su compra. 

Se deberá tener en cuenta lo siguiente:
* Deberá ser la página de inicio de la web `/`. L
* La grilla deberá mostrar como máximo 12 cómics por página. L
* La grilla deberá soportar algún tipo de paginación simple. Se puede utilizar botones de `Anterior y Siguiente` o `carga infinita (Endless loading)`
* Cada cómic deberá contener `imagen` y `nombre`, junto con dos botones `Comprar` y `Ver detalle`. L
* Permitir que todo el contenido junto con los resultados de la primer página, sean indexable por los buscadores.
* Esta página debera utilizar el [Layout General](#layout-general)
* Esta página permite la funcionalidad [Opcional 3: Compra de 1 Click](#opcional-3-compra-de-1-click) */

const pageSize = 12;
interface Props {
  initialComics: PropsCard[];
  total: number;
  page: number;
}
const Index: NextPage<Props> = ({ initialComics, total, page }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Sample"}>
        <ComicGrid initialComics={initialComics} />
      </BodySingle>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const currentPage = Number(query.page ?? 1);
  const offset = (currentPage - 1) * 12;
  const comicsApi = await getComics(offset, pageSize);
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate");
  const initialComics = comicsApi?.data?.results || [];
  const total = comicsApi?.data?.total ?? null;

  return {
    props: {
      initialComics,
      total,
      page: offset,
    },
  };
};
