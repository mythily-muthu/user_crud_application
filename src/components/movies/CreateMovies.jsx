import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectWrapper from "../common/SelectWrapper";
import InputWrapper from "../InputWrapper";

const CreateMovies = () => {
  let navigate = useNavigate();

  let [movieDetails, setMovieDetails] = useState({
    title: "",
    released_year: "",
    movie_description: "",
    genre: "",
    image_url: "",
    cast: "",
    budget: "",
  });

  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/movies", movieDetails);
  };

  let handleBack = (e) => {
    e.preventDefault();
    navigate("/movies");
  };

  const genreOptions = [
    {
      value: "horror",
      label: "Horror",
    },
    {
      value: "action",
      label: "Action",
    },
    {
      value: "sci-fi",
      label: "Science-fiction",
    },
    {
      value: "thriller",
      label: "Thriller",
    },
    {
      value: "comedy",
      label: "Comedy",
    },
  ];

  let castOptions = [
    {
      value: "shankar",
      label: "Shankar",
    },
    {
      value: "bala",
      label: "Bala",
    },
    {
      value: "chandrasekar",
      label: "Chandrasekar",
    },
    {
      value: "thiyagaraja",
      label: "Thiyagaraja",
    },
    {
      value: "ravi",
      label: "Ravi",
    },
    {
      value: "vaasu",
      label: "Vaasu",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center p-2">
      <div className="w-full flex">
        <button
          className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer fixed left-2 top-18 items-center "
          onClick={handleBack}
        >
          Back
        </button>
        <h1 className="text-3xl flex justify-center w-full h-full ">
          {" "}
          Add you favourite movie
        </h1>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="flex h-full w-[400px] justify-center items-center ">
          <form
            className="bg-slate-100 h-[650px] w-full p-4 rounded-2xl justify-center "
            onSubmit={handleSubmit}
          >
            <InputWrapper
              label={"title"}
              value={movieDetails.title}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  title: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={" released_year"}
              value={movieDetails.released_year}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  released_year: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"movie_description"}
              value={movieDetails.movie_description}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  movie_description: e.target.value,
                });
              }}
            />

            {/* <InputWrapper
              label={"genre"}
              value={movieDetails.genre}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  genre: e.target.value,
                });
              }}
            /> */}
            <SelectWrapper
              label={"genre"}
              value={movieDetails.genre}
              options={genreOptions}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  genre: e.value,
                });
              }}
            />

            {/* <InputWrapper
              label={"cast"}
              value={movieDetails.cast}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  cast: e.target.value,
                });
              }}
            /> */}

            <SelectWrapper
              label={"cast"}
              value={movieDetails.cast}
              options={castOptions}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  cast: e.value,
                });
              }}
            />
            <InputWrapper
              label={"image_url"}
              value={movieDetails.image_url}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  image_url: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"budget"}
              value={movieDetails.budget}
              onChange={(e) => {
                setMovieDetails({
                  ...movieDetails,
                  budget: e.target.value,
                });
              }}
            />
            <div className="flex p-7 justify-center ">
              <button
                className="py-1 px-10 w-56 flex justify-center bg-green-500 text-white rounded cursor-pointer items-center "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMovies;
