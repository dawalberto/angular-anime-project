export interface MangaDetail {

  request_hash:string;
  request_cached: true;
  request_cache_expiry:number;
  mal_id:number;
  url:string;
  title:string;
  title_english:string;
  title_synonyms:Array<any>;
  title_japanese:string;
  status:string;
  image_url:string;
  type:string;
  volumes:number;
  chapters:number;
  publishing: false;
  published:Object;
  rank:number;
  score:number;
  scored_by:number;
  popularity:number;
  members:number;
  favorites:number;
  synopsis:string;
  background:string;
  related:Object;
  genres:Array<any>;
  authors:Array<any>;
  serializations:Array<any>;

}
