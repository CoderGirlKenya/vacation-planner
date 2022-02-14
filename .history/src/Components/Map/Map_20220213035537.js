//component lays out structure for map that displays places and weather data from api.js 

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import {Rating} from '@mui/material'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {MAP_STYLES} from '../../mapStyles';
import useStyles from './styles.js';
import WeatherData from '../PlaceDetails/WeatherData';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA9egc_p2EInLmBckdsnxUhCUOKqkj-orw ' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: {MAP_STYLES} }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img alt={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />  
                </Paper>
              )}
              <div>
        {weatherData?.main?.length && weatherData.main.map((data, i) => (
          // <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <WeatherData/>
          // </div>
        ))}
        </div>
        {/* {weatherData?.main?.length && weatherData.main.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lng}>
             <img src={`http://openweathermap.org/img/w/${data.weather[0].main}.png`} alt={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))} */}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
