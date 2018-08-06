import React from 'react';
import HotelsApi from '../apis/HotelsApi';
import { distance } from '../utils/location';

export default function HotelThumbnail(props) {
  const backgroundImage = {
    background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(' + props.hotel.thumbnail_url + ')',
  };
  const { rating_label, ecstasy, ecstasyColor } = HotelsApi.getRatingLabel(props.hotel.ecstasy);
  const nearest_dist = distance(props.hotel.loc[0], props.hotel.loc[1],
    props.hotel.nearest_airport.latitude, props.hotel.nearest_airport.longitude).toFixed(1);
  const ecstasyStyle = {
    backgroundColor: ecstasyColor
  };

  return (
    <li className='hotel-thumbnail' style={backgroundImage}>
      <div className='hotel-thumbnail__details'>
        <div className='hotel-thumbnail__name'>{props.hotel.name}</div>
        <div className='hotel-thumbnail__rating'>
          <span className='hotel-thumbnail__ecstasy' style={ecstasyStyle}>{ecstasy}</span>
          <span className='hotel-thumbnail__rating-label'>{rating_label}</span>
        </div>
        <div className='hotel-thumbnail__nearest_poi'>
          {nearest_dist} mi from {props.hotel.nearest_airport.name}
        </div>
        <div className='hotel-thumbnail__select-container'>
          <span className='hotel-thumbnail__select'>Select</span>
          <span className='hotel-thumbnail__arrow'>&#9660;</span>
        </div>
      </div>
    </li>
  );
}