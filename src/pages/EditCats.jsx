import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";

const EditCats = () => {
  let navigate = useNavigate();
  let params = useParams();
  console.log(params);
  let [petState, setPetState] = useState({
    image_url: "",
    Bread_Name: "",
    Price: "",
    Nationality: "",
    Description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let URL = `http://localhost:4000/api/cats/${params.cat_id}`;
    await axios.put(URL, petState);
    navigate("/cats");

    // await axios.post("url", userState);
  };
  const getSingleCat = async () => {
    let URL = `http://localhost:4000/api/cats/${params.cat_id}`;
    let res = await axios.get(URL);
    console.log(res.data);
    setPetState(res.data);
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/cats");
  };
  useEffect(() => {
    getSingleCat();
  }, []);

  return (
    <div>
      <div>
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
                <h3 className="text-3xl">Edit your cat page</h3>
              </div>

              <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
                <InputWrapper
                  label={"Breed_Name"}
                  value={petState.Bread_Name}
                  onChange={(e) => {
                    setPetState({
                      ...petState,
                      Bread_Name: e.target.value,
                    });
                  }}
                />
                <InputWrapper
                  label={"Nationality"}
                  value={petState.Nationality}
                  onChange={(e) => {
                    setPetState({
                      ...petState,
                      Nationality: e.target.value,
                    });
                  }}
                />
                <InputWrapper
                  label={"Price"}
                  value={petState.Price}
                  onChange={(e) => {
                    setPetState({
                      ...petState,
                      Price: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Description"}
                  value={petState.Description}
                  onChange={(e) => {
                    setPetState({
                      ...petState,
                      Description: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Image url"}
                  value={petState.image_url}
                  onChange={(e) => {
                    setPetState({
                      ...petState,
                      image_url: e.target.value,
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
      </div>
    </div>
  );
};

export default EditCats;
