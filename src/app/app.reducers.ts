import { Anime } from './interfaces/anime';
import { Manga } from './interfaces/manga';
import { ActionReducerMap } from '@ngrx/store';
import { animeReducer } from './animes/animes.reducer';
import { mangaReducer } from './mangas/mangas.reducers';


export interface AppState {
  lastSearchedAnime:Anime[];
  lastSearchedManga:Manga[];
}


export const appReducers:ActionReducerMap<AppState> = {
  lastSearchedAnime:animeReducer,
  lastSearchedManga:mangaReducer
}
