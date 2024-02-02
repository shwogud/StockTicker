/** @format */

const initialState = {
  stockData: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCK_DATA_SUCCESS":
      return {
        ...state,
        stockData: action.payload,
        error: null,
      };
    case "FETCH_STOCK_DATA_FAILURE":
      return {
        ...state,
        stockData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
