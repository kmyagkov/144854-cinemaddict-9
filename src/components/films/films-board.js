import {getSortTemplate} from './sort';
import {getListTemplate} from './list';

export const getFilmsBoardTemplate = () => {
  return `<section class="films">
            ${getSortTemplate()}
            ${getListTemplate()}
          </section>`;
};
