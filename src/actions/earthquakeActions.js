import axios from 'axios';
import { FETCH_DATA, FILTER_MAG_TYPE, FILTER_MAGNITUDE } from './types';

export const fetchData = () => dispatch => {
  const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';
  try {
    axios.get(url).then(data => {
      dispatch({
        type: FETCH_DATA,
        payload: data
      });
    });
  } catch(e) {
    console.error('error: ', e)
  }
};

export const filterByMagType = magtype => dispatch => {
  return dispatch({
    type: FILTER_MAG_TYPE,
    payload: magtype
  })
}

export const filterByMagnitude = magnitude => dispatch => {
  return dispatch({
    type: FILTER_MAGNITUDE,
    payload: magnitude
  })
}