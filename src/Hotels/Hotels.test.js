import React from 'react';
import ReactDOM from 'react-dom';
import Hotels from './Hotels';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hotels />, div);
});