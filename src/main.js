import {getMoviesSearchTemplate} from './components/movies-search';
import {getProfileRatingTemplate} from './components/profile-rating';
import {getMainNavTemplate} from './components/main-nav';
import {getFilmsBoardTemplate} from './components/films/films-board';
import render from './components/render';

const pageHeader = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(pageHeader, getMoviesSearchTemplate());
render(pageHeader, getProfileRatingTemplate());
render(main, getMainNavTemplate());
render(main, getFilmsBoardTemplate());
