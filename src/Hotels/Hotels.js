import React from 'react';
import HotelsApi from '../apis/HotelsApi';
import HotelThumbnails from '../HotelThumbnails/HotelThumbnails';
import { HOTELS_THUMBNAIL_CONFIG } from '../apis/constants.js';
import './Hotels.css';

export default class Hotels extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hotels: [],
      
    }
  }

  componentDidMount() {
    //get hotels from Hipmunk API
    HotelsApi.findAll()
    .then(response => response.json())
    .then(data => {
      if(!Array.isArray(data.results)) return;
      let params = new URLSearchParams();
          for(let key in HOTELS_THUMBNAIL_CONFIG) {
            params.set(key, HOTELS_THUMBNAIL_CONFIG[key]);
      }
      const hotels = data.results.map((result) => {
        if(result.thumbnail_url.length>0) {
          let url = new URL(result.thumbnail_url);
          url = url.origin + url.pathname + '?' + params;
          result.thumbnail_url = url;
        }
        return result;
      });
      this.setState({
        hotels
      });
    })
    .catch(error => console.error(`Fetch Error =\n`, error));
  }

  render() {
    const { hotels } = this.state;
    return (
      <div className='hotels'>
        <h2 className='hotels__header'>Hotels</h2>
        <HotelThumbnails hotels={hotels} />
      </div>
    );
  }
}

