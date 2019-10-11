import { Action } from '@ngrx/store'
import { Anime } from '../interfaces/anime'


export const LAST_SEARCHED_ANIME = '[Anime] ✔ Add last anime searched'


export class LastSearchedAnime implements Action {
  readonly type = LAST_SEARCHED_ANIME

  constructor(public anime:Anime[]) { }
}


export type Actions = LastSearchedAnime
