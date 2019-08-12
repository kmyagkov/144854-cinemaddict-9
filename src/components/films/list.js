import {getCardTemplate} from './card';
import {getShowMoreButtonTemplate} from './show-more';

export const getListTemplate = () => {
  const cards = new Array(5).fill(getCardTemplate());
  return `<section class="films-list">
            <div class="films-list__container">
                ${cards.join(``)}
            </div>
            ${getShowMoreButtonTemplate()}
          </section>`;
};
