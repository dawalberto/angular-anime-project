import { Action } from '@ngrx/store';
import { Anime } from './interfaces/anime';

export const LAST_ANIMES_SEARCHED = 'LastAnimesSearched'
export const LAST_NAME_ANIME_SEARCHED = 'LastNameAnimeSearched'

export class LastAnimesSearched implements Action {
  readonly type = LAST_ANIMES_SEARCHED

  constructor(public payload:Anime[]) {}
}

export class LastNameAnimeSearched implements Action {
  readonly type = LAST_NAME_ANIME_SEARCHED

  constructor(public payload:string) {}
}

export type actions = LastAnimesSearched | LastNameAnimeSearched;
