import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputWrapper from "../InputWrapper";

const EditMovies = () => {
  let navigate = useNavigate();
  let params = useParams();

  console.log("params:", params);

  let [movieState, setMovieState] = useState({
    title: "",
    released_year: "",
    movie_description: "",
    genre: "",
    image_url: "",
    cast: "",
    budget: "",
  });

  const handleBack = async (e) => {
    e.preventDefault();
    navigate("/movies");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/movies/${params.movie_id}`);
    navigate("/movies");
  };

  const getSingleMovie = async () => {
    let res = await axios.get(
      `http://localhost:4000/api/movies/${params.movie_id}`
    );
    console.log(res.data);
    setMovieState(res.data);
  };

  useEffect(() => {
    getSingleMovie();
  }, []);

  return (
    <div className="h-full w-full flex flex-col  ">
      <form className="container" onSubmit={handleSubmit}>
        <div className="flex fixed left-0 p-2 items-center">
          <button
            className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer "
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div className="h-full w-screen justify-center">
          <div className="py-10 text-2xl flex justify-center">
            <h3 className="text-3xl">Edit your movie details</h3>
          </div>

          <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
            <InputWrapper
              label={" title"}
              value={movieState.title}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  title: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"released_year"}
              value={movieState.released_year}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  released_year: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"movie_description"}
              value={movieState.movie_description}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  movie_description: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"genre"}
              value={movieState.genre}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  genre: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"image_url"}
              value={movieState.image_url}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  image_url: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"cast"}
              value={movieState.cast}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  cast: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"budget"}
              value={movieState.budget}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  budget: e.target.value,
                });
              }}
            />
            <div className="py-1">
              <button
                className=" py-1 px-10 w-full flex bg-green-500 text-white rounded cursor-pointer items-center"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMovies;
