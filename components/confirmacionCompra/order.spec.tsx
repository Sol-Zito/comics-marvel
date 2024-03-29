import { render, screen } from "@testing-library/react";
import OrderDetail from "./OrderDetail";
interface Props {
  comicName: string;
  comicImage: string;
  address: string;
  price: string;
  onGoBackClick: () => void;
}

const comic: Props = {
  comicName: "Marvel Previews (2017)",
  comicImage:
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
  address: "Sydney 65",
  onGoBackClick: () => {},
  price: "90",
};

describe("comic", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<OrderDetail {...comic} />);
      const title = screen.getByText("Marvel Previews (2017)");
      expect(title).toBeInTheDocument();
    });
  });
  describe("when rendering address", () => {
    it("should render the address", () => {
      render(<OrderDetail {...comic} />);
      const address = screen.getByText("Dirección de entrega: SYDNEY 65");
      expect(address).toBeInTheDocument();
    });
  });
});
