import Index from "dh-marvel/pages/confirmacion-compra/index.page";
import { render, screen } from "@testing-library/react";
import { ParsedUrlQuery } from "querystring";
import { getServerSideProps } from "../index.page";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

interface Props {
  comicName: string;
  comicImage: string;
  address: string;
  price: string;
}

const comic: Props = {
  comicName: "Marvel Previews (2017)",
  comicImage:
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
  address: "Sydney 65",
  price: "90",
};

describe("confirmacionCompra", () => {
  it("should fetch the data", async () => {
    render(<Index />);
    const title = screen.getByText("Confirmacion de compra:");
    expect(title).toBeInTheDocument();
  });
});
