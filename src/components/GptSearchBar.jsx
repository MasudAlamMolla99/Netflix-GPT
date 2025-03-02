import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { API_OPTIONS, GEMINI_URL } from "../utils/constant";
import { addGeminiMovieResults } from "../utils/gptSlice";

// import { configDotenv } from "dotenv";
// configDotenv({ path: "./.env" });

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.config.lang);
  const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;
  console.log(import.meta.env);

  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    const geminiQuery =
      "Act as a movie recomendation system and suggest movies for the query" +
      searchText.current.value +
      "only give me 5 movies comma separated like the example resulsts given ahead.Example results : Inside out,Don,Sholay,Jawan,Golmaal, Gaddar";
    console.log(GEMINI_URL + GEMINI_KEY);
    const response = await axios({
      url: GEMINI_URL + GEMINI_KEY,
      method: "post",
      data: { contents: [{ parts: [{ text: geminiQuery }] }] },
    });

    const geminiMovies =
      response["data"]["candidates"][0]["content"]["parts"][0]["text"].split(
        ","
      );
    console.log(geminiMovies);

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise,Promise,Promise,Promise,Promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGeminiMovieResults({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center  ">
      <form
        action=""
        className=" w-full  md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className=" col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
