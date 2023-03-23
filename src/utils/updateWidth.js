/* eslint-disable consistent-return */
import {
  windowWidthS,
  windowWidthL,
  additionalColsS,
  additionalColsM,
  additionalColsL,
  totalCardsS,
  totalCardsM,
  totalCardsL,
} from './config';

export const updWidth = (innerWidth) => {
  if (innerWidth < windowWidthS) {
    return { additional: additionalColsS, totalNumber: totalCardsS };
  }
  if (innerWidth > windowWidthS && innerWidth < windowWidthL) {
    return { additional: additionalColsM, totalNumber: totalCardsM };
  }
  if (innerWidth > windowWidthL) {
    return { additional: additionalColsL, totalNumber: totalCardsL };
  }
};
