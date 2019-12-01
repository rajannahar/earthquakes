import React from 'react';

const Earthquake = ({ id, place, mag, magType }) => {
  return (
    <li data-testid="earthquake-item">
      <p>{ id } : { place } : { mag } : { magType }</p>
    </li>
  );
};

export default Earthquake;