import { initialState } from './initialState';
import * as fromMangaActions from './mangas.actions';
import { Manga } from '../interfaces/manga';


export function mangaReducer(state = initialState, action:fromMangaActions.Actions): Manga[] {

  switch(action.type) {

    case fromMangaActions.LAST_SEARCHED_MANGA:
      return [...action.manga]

    default:
      return state

  }

}
