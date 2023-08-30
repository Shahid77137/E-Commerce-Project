import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrdersRequest = () => {
    return {
      type: GET_ORDERS_REQUEST,
    };
  };
  
  export const getOrdersSuccess = (orders) => {
    return {
      type: GET_ORDERS_SUCCESS,
      payload: orders,
    };
  };
  
  export const getOrdersFailure = (error) => {
    return {
      type: GET_ORDERS_FAILURE,
      payload: error,
    };
  };

  
// Action creators for confirmed order
export const confirmedOrderRequest = () => ({
    type: CONFIRMED_ORDER_REQUEST,
  });
  
  export const confirmedOrderSuccess = (data) => ({
    type: CONFIRMED_ORDER_SUCCESS,
    payload: data,
  });
  
  export const confirmedOrderFailure = (error) => ({
    type: CONFIRMED_ORDER_FAILURE,
    payload: error,
  });
  
  // Action creators for placed order
  export const placedOrderRequest = () => ({
    type: PLACED_ORDER_REQUEST,
  });
  
  export const placedOrderSuccess = (data) => ({
    type: PLACED_ORDER_SUCCESS,
    payload: data,
  });
  
  export const placedOrderFailure = (error) => ({
    type: PLACED_ORDER_FAILURE,
    payload: error,
  });
  
  // Action creators for delivered order
  export const deliveredOrderRequest = () => ({
    type: DELIVERED_ORDER_REQUEST,
  });
  
  export const deliveredOrderSuccess = (data) => ({
    type: DELIVERED_ORDER_SUCCESS,
    payload: data,
  });
  
  export const deliveredOrderFailure = (error) => ({
    type: DELIVERED_ORDER_FAILURE,
    payload: error,
  });
  
  // Action creators for canceled order
  export const canceledOrderRequest = () => ({
    type: CANCELED_ORDER_REQUEST,
  });
  
  export const canceledOrderSuccess = (data) => ({
    type: CANCELED_ORDER_SUCCESS,
    payload: data,
  });
  
  export const canceledOrderFailure = (error) => ({
    type: CANCELED_ORDER_FAILURE,
    payload: error,
  });
  
  // Action creators for deleting an order
export const deleteOrderRequest = () => ({
    type: DELETE_ORDER_REQUEST,
  });
  
  export const deleteOrderSuccess = (orderId) => ({
    type: DELETE_ORDER_SUCCESS,payload:orderId
  });
  
  export const deleteOrderFailure = (error) => ({
    type: DELETE_ORDER_FAILURE,
    payload: error,
  });

  export const shipOrderRequest = () => ({
    type: SHIP_ORDER_REQUEST,
  });
  
  export const shipOrderSuccess = (data) => ({
    type: SHIP_ORDER_SUCCESS,
    payload: data,
  });
  
  export const shipOrderFailure = (error) => ({
    type: SHIP_ORDER_FAILURE,
    payload: error,
  });