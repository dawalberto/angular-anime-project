import { Action } from '@ngrx/store';
import { Anime } from './interfaces/anime';

export const LAST_ANIMES_SEARCHED = 'LastAnimesSearched'
export const NAME_ANIME_SEARCHED = 'NameAnimeSearched'

export class LastAnimesSearched implements Action {
  readonly type = LAST_ANIMES_SEARCHED

  constructor(public payload:Anime[]) {}
}

export class NameAnimeSearched implements Action {
  readonly type = NAME_ANIME_SEARCHED

  constructor(public payload:string) {}
}

export type actions = LastAnimesSearched | NameAnimeSearched;
