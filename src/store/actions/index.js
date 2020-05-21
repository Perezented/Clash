import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Initial fetch of data
export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });

        axios
            .get(
                'https://api.nasa.gov/techport/api/projects?api_key=ZaVksBfslbIaEtgPCgnt4okDK1Qjj2oaDaXcZfwN'
            )
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: FETCH_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_DATA_FAILURE,
                    payload: err,
                });
            });
    };
};
