export interface GoogleResponse {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: (ItemsEntity)[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: (RequestEntityOrNextPageEntity)[] | null;
  nextPage?: (RequestEntityOrNextPageEntity)[] | null;
}
export interface RequestEntityOrNextPageEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string | null;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
export interface Pagemap {
  hcard?: (HcardEntity)[] | null;
  cse_thumbnail?: (CseThumbnailEntity)[] | null;
  metatags?: (MetatagsEntity)[] | null;
  cse_image?: (CseImageEntity)[] | null;
  hproduct?: (HproductEntity)[] | null;
}
export interface HcardEntity {
  note?: string | null;
  bday?: string | null;
  fn: string;
  nickname?: string | null;
  label?: string | null;
  category?: string | null;
  url_text?: string | null;
  logo?: string | null;
  url?: string | null;
}
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}
export interface MetatagsEntity {
  referrer: string;
}
export interface CseImageEntity {
  src: string;
}
export interface HproductEntity {
  fn: string;
  category: string;
}
