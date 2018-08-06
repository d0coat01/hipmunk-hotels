import React from 'react';
import HotelsApi from '../apis/HotelsApi';
import HotelThumbnails from '../HotelThumbnails/HotelThumbnails';
import { HOTELS_THUMBNAIL_CONFIG } from '../apis/constants.js';
import './Hotels.css';

const NETWORK_ERROR_MESSAGE = "Whoops! Something went wrong fetching the hotels.";

export default class Hotels extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hotels: [],
      errors: {}
    }
  }

  componentDidMount() {
    //get hotels from Hipmunk API
    HotelsApi.findAll()
    .then(response => response.json())
    .then(data => {
      if(!Array.isArray(data.results)) return;
      //map query string parameters for hotel thumbnail from configuration constant.
      let params = new URLSearchParams();
          for(let key in HOTELS_THUMBNAIL_CONFIG) {
            params.set(key, HOTELS_THUMBNAIL_CONFIG[key]);
      }
      const hotels = data.results.map((result) => {
        if(result.thumbnail_url.length>0) {
          //build new thumbnail url utilizing hipmunk asset api
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
    .catch(error => {
      console.error(`Fetch Error =\n`, error);
      const errors = this.state.errors;
      errors.network_error = NETWORK_ERROR_MESSAGE;
      this.setState({
        errors
      });
    });
  }

  render() {
    const { hotels, errors } = this.state;
    return (
      <div className='hotels'>
        <h2 className='hotels__header'>Hotels</h2>
        {Object.keys(errors).length > 0 && 
        Object.keys(errors).map((key) => {
          return (<h3>{errors[key]}</h3>);
        })
        }
        <HotelThumbnails hotels={hotels} />
      </div>
    );
  }
}

