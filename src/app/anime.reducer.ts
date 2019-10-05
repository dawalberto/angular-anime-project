import * as importsActions from './anime.actions';
import { AppState } from './interfaces/app-state';

export function animeReducer(state:AppState = {lastAnimesSearched:[], nameAnimeSearched:''}, action:importsActions.actions) {

  switch (action.type) {

    case importsActions.LAST_ANIMES_SEARCHED:
      return state.lastAnimesSearched = action.payload

    case importsActions.NAME_ANIME_SEARCHED:
      return state.nameAnimeSearched = action.payload

  }

}
