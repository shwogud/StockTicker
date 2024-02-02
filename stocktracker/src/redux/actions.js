/** @format */

export const fetchStockData = (ticker) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/stocks/${ticker}`);
      const data = await response.json();

      dispatch({ type: "FETCH_STOCK_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_STOCK_DATA_FAILURE", payload: error.message });
    }
  };
};
