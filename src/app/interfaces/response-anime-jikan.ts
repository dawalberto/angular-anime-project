import { Anime } from './anime';

export interface ResponseJikan {

  last_page:number;
  request_cache_expiry:number;
  request_cached:boolean;
  request_hash:string;
  results:Anime[];

}
