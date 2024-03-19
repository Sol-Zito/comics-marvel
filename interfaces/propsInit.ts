import { Comics } from "dh-marvel/features/marvel/comics.type";

export interface PropsInit {
  initialComics: Comics[];
  total: number;
  page: number;
}
