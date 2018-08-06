import React from 'react';
import './HotelThumbnails.css';
import HotelThumbnail from './HotelThumbnail';

export default function HotelThumbnails(props) {
  return (
    <ul className='hotel-thumbnails'>
      { Array.isArray(props.hotels) &&
        props.hotels.map((hotel, index) => {
          return (<HotelThumbnail hotel={hotel} key={index} />)
        })
      }
    </ul>
  );
}
