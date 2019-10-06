import * as importsActions from './anime.actions';

const estadoInicial = { lastAnimesSearched:[], lastNameAnimeSearched:'' }

export function animeReducer(state = estadoInicial, action:importsActions.actions) {

  switch (action.type) {

    case importsActions.LAST_ANIMES_SEARCHED:
      return action.payload

    case importsActions.LAST_NAME_ANIME_SEARCHED:
      return action.payload

  }

}
