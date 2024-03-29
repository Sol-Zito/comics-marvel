import { render, screen } from "@testing-library/react";
import { ComicCard } from "./ComicCard";

const comic = {
  id: 82967,
  image: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    extension: "jpg",
  },
  title: "Marvel Previews (2017) comic test",
};

describe("comic", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(
        <ComicCard id={comic.id} title={comic.title} image={comic.image} />
      );
      const title = screen.getByText("Marvel Previews (2017) comic t...");
      expect(title).toBeInTheDocument();
    });
  });
  describe("when rendering See details", () => {
    it("should render the title", () => {
      render(
        <ComicCard id={comic.id} title={comic.title} image={comic.image} />
      );
      const seeDetails = screen.getByText("See details");
      expect(seeDetails).toBeInTheDocument();
    });
  });
});
