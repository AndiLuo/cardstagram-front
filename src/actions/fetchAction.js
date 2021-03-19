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
  let gallery = []
  axios
    .get(
      // `https://api.unsplash.com/search/photos?page=1&per_page=100&client_id=NtL294oB-F0DzGplMDDWZB-sx5pb3TwXEg4h3nIOI1I&query=${search}`
      '/api/pins'
    )
    .then((response) => {
      console.log(response)
      setTimeout(() => {
      // initialize array for pins
      response.data.forEach(image => {
        // checks if search results contain title OR username
        if ((image.title).toLowerCase().includes(search.toLowerCase()) || (image.author).toLowerCase().includes(search.toLowerCase())
           ) {
             gallery.push(image)
            //  gallery.push(image)
          }
        })
        dispatch({
          type: FETCH_PINS,
          // EVERYTHING IS IMMUTABLE
          payload: gallery,
        });
      }, 1500)
    })
    .catch((err) => console.log(err));
};
