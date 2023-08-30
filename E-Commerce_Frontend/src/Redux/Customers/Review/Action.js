


import {
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAILURE,
    GET_ALL_REVIEWS_SUCCESS,
    GET_ALL_REVIEWS_FAILURE,
    CREATE_RATING_SUCCESS,
    CREATE_RATING_FAILURE,
    GET_ALL_RATINGS_SUCCESS,
    GET_ALL_RATINGS_FAILURE
  } from './ActionTyp';
import api from '../../../config/api';

export const createReview = (resData) => {
  console.log("create review req ",resData)
  return async (dispatch) => {
    try {
      const response = await api.post('/api/reviews/create', 
        resData);

      dispatch({
        type: CREATE_REVIEW_SUCCESS,
        payload: response.data
      });
      console.log("create review ",response.data)
    } catch (error) {
      dispatch({
        type: CREATE_REVIEW_FAILURE,
        payload: error.message
      });
    }
  };
};

export const getAllReviews = (productId) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/reviews/product/${productId}`);

      dispatch({
        type: GET_ALL_REVIEWS_SUCCESS,
        payload: response.data
      });
      console.log("all review ",response.data)
    } catch (error) {
      dispatch({
        type: GET_ALL_REVIEWS_FAILURE,
        payload: error.message
      });
    }
  };
};



export const createRating = (resData) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/ratings/create', 
        resData);

      dispatch({
        type: CREATE_RATING_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: CREATE_RATING_FAILURE,
        payload: error.message
      });
    }
  };
};

export const getAllRatings = (productId) => {
  // console.log("product id review ",productId)
  return async (dispatch) => {
    try {
      const response = await api.get(`/api/ratings/product/${productId}`, {
       
      });

      dispatch({
        type: GET_ALL_RATINGS_SUCCESS,
        payload: response.data
      });
      console.log("all rating ",response.data)
    } catch (error) {
      dispatch({
        type: GET_ALL_RATINGS_FAILURE,
        payload: error.message
      });
    }
  };
};
