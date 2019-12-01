import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByMagType } from '../actions/earthquakeActions';
import { filterByMagnitude } from '../actions/earthquakeActions'

const Filter = ({ label }) => {

  const [data, setData] = useState("")
  const dispatch = useDispatch();

  const onChange = event => {
    setData(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault();
    label === 'magType'
      ? dispatch(filterByMagType(data))
      : dispatch(filterByMagnitude(data))
  }

  const formLabelId = `form-${label}`
  const labelLabelId = `label-${label}`
  const inputLabelId = `input-${label}`
  const buttonLabelId = `button-${label}`

  return(
    <form onSubmit={onSubmit} data-testid={formLabelId}>
      <label data-testid={labelLabelId}>Filter by {label}: </label>
      <input type="text" onChange={onChange} data-testid={inputLabelId} />
      <button type="submit" data-testid={buttonLabelId}>Filter</button>
    </form>
  );
};

export default Filter;