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
  };

  let handleAddMovie = () => {
    navigate("/createmovies");
  };
  let handleBack = () => {
    navigate("/");
  };
  let handleEdit = (id) => {
    navigate(`/editmovie/${id}`);
  };
  let handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/movies/${id}`);
    alert("are you sure?");
    console.log("deleted");
    getAllMovies();
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-2">
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
      <div className="flex p-3 gap-3 flex-wrap w-full max-h-44 ">
        {movies.map((movie) => {
          return (
            <div
              className=" w-72  flex flex-col gap-2 rounded-2xl bg-slate-100 hover:bg-slate-200 overflow-hidden "
              key={movie._id}
            >
              <img
                src={movie.image_url}
                alt={movie.title}
                className="object-cover h-[300px] w-full  "
              />

              <div className="h-[200px] p-2  flex flex-col gap-y-3 ">
                <div className="w-full flex justify-between">
                  <h1 className="font-medium ">{movie.title}</h1>
                  <h2 className="font-semibold text-sm ">
                    ({movie.released_year})
                  </h2>
                </div>

                <h2 className="text-sm">{movie.genre}</h2>
                <h2 className="font-thin">{movie.budget}</h2>
                <h2 className="text-sm">{movie.cast}</h2>
                <h2 className="text-sm max-h-4 w-full ">{movie.description}</h2>

                <div className="flex justify-end gap-2 ">
                  <button
                    className="bg-green-500 text-white px-1 rounded "
                    onClick={() => handleEdit(movie._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-1 rounded "
                    onClick={() => handleDelete(movie._id)}
                  ></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
