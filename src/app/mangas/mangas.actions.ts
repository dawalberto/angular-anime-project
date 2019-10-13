import { Action } from '@ngrx/store';
import { Manga } from '../interfaces/manga';


export const LAST_SEARCHED_MANGA = '[Manga] ✔ Add last manga searched'


export class LastSearchedManga implements Action {
  readonly type = LAST_SEARCHED_MANGA

  constructor(public manga:Manga[]) { }
}


export type Actions = LastSearchedManga
