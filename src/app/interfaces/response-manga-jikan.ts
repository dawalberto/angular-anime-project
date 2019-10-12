import { Manga } from './manga';

export interface ResponseMangaJikan {

  last_page:number;
  request_cache_expiry:number;
  request_cached:boolean;
  request_hash:string;
  results:Manga[];

}
