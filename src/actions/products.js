import axios from 'axios';

import {
    PRODUCTS_LOADED,
    PRODUCTS_NOT_LOADED,
    SEARCH_TEXT
} from './types';

// Get posts
export const getItems = productName => async dispatch => {
    try {
        const res = await fetch(`https://coursesearchflask.herokuapp.com/${productName}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': true,
                'origin': 'http://localhost:3000'
            },
        }).then((data) => data.json());
        console.log(res)
        dispatch({
            type: PRODUCTS_LOADED,
            payload: res,
        });
        dispatch({
            type: SEARCH_TEXT,
            payload: productName,
        });
    } catch (err) {
        dispatch({
            type: PRODUCTS_NOT_LOADED,
            payload: {
                msg: err,
                status: err.status,
            },
        });
    }
};