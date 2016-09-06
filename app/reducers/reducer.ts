/**
 * Counter Reducer
 */
import { Reducer, Action } from 'redux';
import { AppState } from '../app-state';
import {
  SET_CLIENT,
  INCREMENT
} from '../actions/actions-creators';

let initialState: AppState = { clientId: 0 };

// Create our reducer that will handle changes to the state
// argument action should be of type Action, but is changed to any because of property clientId not accepted/error
export const clientReducer: Reducer<AppState> =
  (state: AppState = initialState, action: any): AppState => {
    switch (action.type) {
      case SET_CLIENT:
        return Object.assign({}, state, { clientId: action.clientId });
      case INCREMENT:
        return Object.assign({}, state, { clientId: state.clientId + 1 });

      default:
        return state;
    }
  };


import { FilmActionTypes, FilmAction } from '../actions/film-actions';

export default (state = [], action:FilmAction = {type:"?"}) => {
  switch (action.type) {
    case FilmActionTypes.REQUEST_FILMS:
      return Object.assign({}, state, {isFetchingFilms: true});
    case FilmActionTypes.RECEIVE_FILMS:
      return Object.assign({}, state, {isFetchingFilms: false, list: action.films});
    case FilmActionTypes.REQUEST_FILM:
      return Object.assign({}, state, {isFetchingFilm: true});
    case FilmActionTypes.RECEIVE_FILM:
      return Object.assign({}, state, {isFetchingFilm: false, currentFilm: action.film});
    case FilmActionTypes.RECEIVE_NUMBER_OF_FILMS:
      return Object.assign({}, state, {count: action.count});
    case FilmActionTypes.CURRENT_FILM:
      return Object.assign({}, state, {current: action.currentIndex});
    default:
      return state;
  }
};

export const currentFilmSelector = state => state.films.currentFilm
export const filmsCountSelector = state => state.films.count
export const isFetchingFilmSelector = state => state.films.isFetchingFilm

