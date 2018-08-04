import React from 'react';
import './HotelThumbnails.css';
import HotelsApi from '../apis/HotelsApi';

const HotelThumbnail = (props) => {
  const backgroundImage = {
    background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(' + props.hotel.thumbnail_url + ')',
  };
  const { rating_label, ecstasy, ecstasyColor } = HotelsApi.getRatingLabel(props.hotel.ecstasy);
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
      <div className='hotel-thumbnail__nearest_poi'>0.1 mi from Starbucksssssssssssssssssasssssdf</div>
      <div className='hotel-thumbnail__select-container'>
        <span className='hotel-thumbnail__select'>Select</span>
        <span className='hotel-thumbnail__arrow'>&#9660;</span>
      </div>
    </div>
  </li>
  );
}

export default function HotelThumbnails(props) {
    return (
      <ul className='hotel-thumbnails'>
        {
        props.hotels.map((hotel, index) => {
          return (<HotelThumbnail hotel={hotel} key={index} />)
        })
        }
      </ul>
    );
}
