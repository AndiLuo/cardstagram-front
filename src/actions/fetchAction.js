import { SEARCH_PIN } from "./types";
import { FETCH_PINS } from "./types";
import { LOADING } from "./types";
import axios from "axios";

export const searchPin = (text) => (dispatch) => {
    dispatch({
      type: SEARCH_PIN,
      payload: text,
    });
  };
  
  export const setLoading = () => {
    return {
      type: LOADING
    }
}

const gallery = []

export const fetchPins = () => (dispatch) => {
  // initialize gallery in the beginning so it empties each call
  axios
    .get(
      'https://cardstagram.herokuapp.com/api/pins'
    )
    .then((response) => {
      // initialize array for pins
      response.data.forEach(card => {
        gallery.push(card)
      })
    })
    .catch((err) => console.log(err));
  }

export const assignPins = (search) => (dispatch) => {
      dispatch({
        type: FETCH_PINS,
        payload: gallery,
      });

}

