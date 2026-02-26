import { initModifications } from './modifications';
import { initCardLink } from './cardLink';

export const initCard = (card) => {
  initModifications(card);
  initCardLink(card);
}