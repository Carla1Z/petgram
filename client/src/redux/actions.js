import axios from "axios";	
import { GET_CATEGORIES, GET_PHOTOS, GET_USERS } from "./type.js";	

export const getCategories = () => {	
  return async (dispatch) => {	
    const response = await axios.get("http://localhost:3001/categories");	
    dispatch({	
      type: GET_CATEGORIES,	
      payload: response.data,	
    });	
  };	
};	

export const getPhotos = () => {	
  return async (dispatch) => {	
    const response = await axios.get("http://localhost:3001/photos");	
    dispatch({	
      type: GET_PHOTOS,	
      payload: response.data,	
    });	
  };	
};	

export const getUsers = () => {	
  return async (dispatch) => {	
    const response = await axios.get("http://localhost:3001/users");	
    dispatch({	
      type: GET_USERS,	
      payload: response.data,	
    });	
  };	
};	
