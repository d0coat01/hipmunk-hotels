# Hipmunk Hotels

Nearby hotels based on hipmunk's hotel API. UI created with React with a responsive design strategy kept in mind.

## Installation

1. `git clone https://github.com/d0coat01/hipmunk-hotels`
2. `cd hipmunk-hotels`
3. `npm install && npm start`

## Code Navigation

* `src/apis/HotelsApi.js` - Library to interact with Hipmunk hotel search api
* `src/Hotels/` - Hotels container for thumbnails
* `src/HotelThumbnails/` - Thumbnail components
* `src/utils/location.js` - Function to calculate distance between lat/long pairs
* `public` - Contains index.html, page icon, and manifest.json for progressive web applications (from create-react-app boilerplate)
* `src/App.js` - Main application for project. Includes routes.

## Explanations

* Rating is based off of ecstasy rating. I divided this rating by 100 and rounded to the nearest two significant digits.
* Nearest landmark uses the nearest airport position.
* Image for hotel does not use the default thumbnail url, I alter the url params to make use of the image processing on Hipmunk's end. I changed the width/height to larger dimensions while using 'crop' to maintain image quality. I also used a quality rating of 70.

## Sources

* Used a code snippet from GeoDataSource to calculate distance between points.
* Create-react-app used as boilerplate.

