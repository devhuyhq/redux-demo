export const addGroup = () => {
  return dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    fetch("https://api.coinmarketcap.com/v2/listings/")
      .then(data => {
        dispatch({
          type: "ADD_GROUP",
          group: "AAA"
        });
      })
      .catch(err => {
        dispatch({
          type: "ADD_ERROR"
        });
      });
  };
};
