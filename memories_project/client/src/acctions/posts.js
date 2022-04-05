// creating an action.
// we use the api.js funtions an now we called which are going to be used by the dispaccher
// the acction must be set up in the dispacher.

import * as api from "../api";

//first create an Action Creators.
export const getPosts = () => async (dispatch) => {
  try {
    //deconstructuring the response from teh API call.
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
