import { initialState } from './initialState';
import * as fromAnime from './animes.actions';
import { Anime } from '../interfaces/anime';


export function animeReducer(state = initialState, action:fromAnime.Actions): Anime[] {

  switch(action.type) {

    case fromAnime.LAST_SEARCHED_ANIME:
      return [...action.anime]

    default:
      return state

  }

}
