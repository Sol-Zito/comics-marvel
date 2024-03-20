export interface CharacterDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}
export interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}
export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string | Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: SeriesList;
  stories: SeriesList;
  events: SeriesList;
  series: SeriesList;
}
export interface Url {
  type: string;
  url: string;
}
export interface Image {
  path: string;
  extension: string;
}

export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}
export interface SeriesSummary {
  resourceURI: string;
  name: string;
  type?: string;
}
