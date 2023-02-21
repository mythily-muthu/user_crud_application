import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Cats = () => {
  let navigate = useNavigate();

  let [cats, setCats] = useState([]);

  const getAllCats = async () => {
    let res = await axios.get("http://localhost:4000/api/cats");
    console.log(res.data);
    setCats(res.data);
  };
  const handleAddCat = (e) => {
    e.preventDefault();
    navigate("/createcats");
  };
  let handleEdit = () => {
    navigate("/editcat/:cat_id");
  };
  let handleDelete = async (id) => {
    alert("are you sure you want to delete the cat?");
    console.log("deleted");
    await axios.delete(`http://localhost:4000/api/cats/${id}`);
    getAllCats();
  };

  useEffect(() => {
    getAllCats();
  }, []);

  return (
    <div className="w-full h-full justify-center items-center">
      <div className="flex justify-center fixed right-0 top-50 p-4 gap-2">
        <button
          className="flex justify-center rounded  bg-green-700 text-white px-3 py-1 cursor-pointer"
          onClick={handleAddCat}
        >
          Add Cat
        </button>
        <button
          className="flex justify-center rounded  bg-red-700 text-white px-3 py-1 cursor-pointer"
          onClick={handleAddCat}
        >
          Back
        </button>
      </div>
      <h1 className="text-3xl font-bold justify-center flex"> Cats</h1>
      <div className=" gap-8 flex flex-wrap p-4 py-4 justify-center ">
        {cats.map((cat) => {
          return (
            <div
              className="w-[200px] h-auto flex flex-col  justify-center rounded bg-green-100 relative "
              key={cat._id}
            >
              <img
                src={cat.image_url}
                alt={cat.Breed_Name}
                className=" w-56 h-[204px] object-cover"
              />
              <div className="flex flex-col p-2 justify-center">
                <p>
                  <span className="text-xl font-bold">$:</span>
                  {cat.Price}
                </p>
                <p>{cat.Nationality}</p>
                <p>
                  {" "}
                  <span className="text-lg font-medium">Description:</span>
                  {cat.Description}
                </p>
                <div className="pt-5 p-2 flex justify-center gap-x-2 fixed bottom-0 right-0 absolute ">
                  <button
                    className="bg-green-600 text-white items-center text-xs cursor-pointer w-23px p-1  rounded-md "
                    onClick={() => handleEdit(Cats._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white items-center text-xs cursor-pointer w-23px p-1  rounded-md "
                    onClick={() => handleDelete(Cats._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cats;
