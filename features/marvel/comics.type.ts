export interface Comics {
  id: number;
  digitalId: number;
  title: Title | string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  collections: any[] | Series[];
  collectedIssues: any[] | Series[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: ImageT;
  images: ImageT[];
  creators: Characters;
  characters: Characters;
  stories: Characters;
  events: Characters;
  oldPrice: number | string;
  price: number | string;
  stock: number;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export enum Title {
  MarvelPreviews2017 = "Marvel Previews (2017)",
  MarvelPreviews2017Present = "Marvel Previews (2017 - Present)",
}
export interface Series {
  resourceURI: string;
  name: Title | string;
}
export interface DateElement {
  type: string;
  date: string | Date;
}

export interface Price {
  type: string;
  price: number;
}
export interface Characters {
  available: number;
  returned: number;
  collectionURI: string;
  items: Item[];
}
export interface ImageT {
  path: string;
  extension: string;
}
export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
  type?: string;
}
