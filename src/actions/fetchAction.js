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

export const fetchPins = (search) => (dispatch) => {
  // initialize gallery in the beginning so it empties each call
  const gallery = []
  const realGallery = []
  axios
    .get(
      'https://cardstagram.herokuapp.com/api/pins'
    )
    .then((response) => {
      console.log(response)
      // initialize array for pins
      response.data.forEach(image => {
        gallery.push(image)
      })
    })
      .then(()=>{
        gallery.forEach(image => {
          if ((image.title).toLowerCase().includes(search.toLowerCase()) || (image.author).toLowerCase().includes(search.toLowerCase())
             ) {
               realGallery.push(image)
            }
          })
          console.log(gallery)
          console.log(realGallery)
          dispatch({
            type: FETCH_PINS,
            // EVERYTHING IS IMMUTABLE
            payload: realGallery,
          });
      })

      // })
    .catch((err) => console.log(err));
};
