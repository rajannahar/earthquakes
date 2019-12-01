import { FETCH_DATA, FILTER_MAG_TYPE, FILTER_MAGNITUDE } from '../actions/types';

const initialState = {
  loading: true
};

const earthquakeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_DATA:
      return {
        ...state,
        ...payload,
        loading: payload && payload.length ? false : true
      }
    case FILTER_MAG_TYPE:
      return {
        ...state,
        data: {
          features: state.data.features.filter(item => {
            return item.properties.magType.toLowerCase() === payload ? item : null;
          })
        }
        // posts: [...state.posts, payload]
        // state.data.features.filter(item => {
        //   return item.properties.magType.toLowerCase() === payload ? item : null;
        // }),
      }
    case FILTER_MAGNITUDE:
    return {
      ...state,
      data: {
        features: state.data.features.filter(item => {
          return item.properties.mag ===  parseFloat(payload) ? item : null
        })
      }
      // earthquakes: state.earthquakes.filter(item => {
      //   return item.properties.mag ===  parseFloat(payload) ? item : null
      // })
    }
    default:
      return state;
  };
};

export default earthquakeReducer;