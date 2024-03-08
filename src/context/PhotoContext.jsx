import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../config";
export const PhotoContext = createContext();

function PhotoContextProvider(props) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  function runSearch(query) {
    axios
      .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        const { data: { photos: { photo } } } = response
        setImages(photo);
        setLoading(false);
      })
      .catch(error => {
        console.log("Encountered an error with fetching and parsing data", error);
      });
  }

  return(
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
}

export default PhotoContextProvider;
