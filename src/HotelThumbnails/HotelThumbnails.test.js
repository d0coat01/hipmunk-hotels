import React from 'react';
import ReactDOM from 'react-dom';
import HotelThumbnails from './HotelThumbnails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HotelThumbnails hotels={[]} />, div);
});