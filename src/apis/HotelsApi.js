import { HOTELS_URL, HOTEL_RATINGS, HOTEL_RATINGS_COLOR } from './constants';

export default class HotelsApi {
  static findAll() {
    return fetch(HOTELS_URL);
  }
  static getRatingLabel(ecstasy) {
    const rating = Number.parseFloat(ecstasy/100).toPrecision(2);
    let min = 0;
    let label = "Poor";
    for(let level in HOTEL_RATINGS) {
      level = parseInt(level, 0);
      if(rating>=level && level>=min) {
        label = HOTEL_RATINGS[level];
        min = level;
      }
    }
   // console.log(label, rating);
    return { rating_label: label, ecstasy: rating , ecstasyColor: HOTEL_RATINGS_COLOR[label]};
  }
}