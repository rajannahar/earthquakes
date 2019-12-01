import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/earthquakeActions'
import Earthquake from './Earthquake';

const Earthquakes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const store = useSelector(state => state.store);
  let earthquakesData;

  if (store && store.data) {
    const { features } = store.data;
    earthquakesData = features && features.map((earthquake) => {
      const { id } = earthquake;
      const { mag, place, magType } = earthquake.properties;
      return (
        <Earthquake data-testid='earthquakes' key={ id } id={id} place={place} mag={mag} magType={magType} />
      );
    });
  } else {
    const { loading } = store;
    return (
      loading
        ? <p data-testid="earthquakes-loading">Loading...</p>
        : <p data-testid="earthquakes-not-found">Not found</p>
    )
  };

  return (
    <ul>
      { earthquakesData }
    </ul>
  );

};

export default Earthquakes;