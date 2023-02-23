import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Movies = () => {
  let [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  const getAllMovies = async () => {
    let res = await axios.get("http://localhost:4000/api/movies");
    console.log(res.data);
    setMovies(res.data);
    console.log("m:", movies);
  };

  let handleAddMovie = () => {
    navigate("/createmovies");
  };
  let handleBack = () => {
    navigate("/");
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="w-full  h-full ">
      <div className="flex justify-between items-center p-3">
        <div className="gap-3 flex">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleBack}
          >
            Back
          </button>
          <h1 className="text-2xl font-semibold">Movies List</h1>
        </div>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={handleAddMovie}
        >
          Add Movie
        </button>
      </div>
      <div className="flex p-3 gap-3  ">
        {movies.map((movie) => {
          return (
            <div
              className="min-h-fit w-64 flex flex-wrap gap-2 bg-slate-100 hover:bg-slate-200 rounded-2xl "
              key={movie._id}
            >
              <img
                src={movie.image_url}
                alt={movie.title}
                className="object-cover h-[300px] w-full rounded-2xl "
              />

              <div className=" justify-between p-2 gap-y-1">
                <h1 className="font-medium ">{movie.title}</h1>
                <h2 className="font-semibold text-sm">
                  ({movie.released_year})
                </h2>
              </div>

              <div className="flex flex-col p-2 gap-y-1">
                <h2 className="text-sm">{movie.genre}</h2>
                <h2 className="font-thin">{movie.budget}</h2>
                <h2 className="text-sm">{movie.cast}</h2>
                <h2 className="text-sm">{movie.description}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
