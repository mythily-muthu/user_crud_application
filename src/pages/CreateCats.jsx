import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";

const CreateCats = () => {
  let navigate = useNavigate();

  let [catDetails, setCatDetails] = useState({
    image_url: "",
    breed_name: "",
    price: "",
    nationality: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let URL = "http://localhost:4000/api/cats";
    await axios.post(URL, catDetails);
    navigate("/cats");

    // await axios.post("url", userState);
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/cats");
  };

  const handleOnChange = (e, field) => {
    setCatDetails({ ...catDetails, [field]: e.target.value });
  };

  return (
    <div className="h-full w-full p-5">
      <form onSubmit={handleSubmit}>
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
            <h3 className="text-3xl">Create new cat page</h3>
          </div>

          <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
            <InputWrapper
              label={"Breed_Name"}
              value={catDetails.breed_name}
              onChange={(e) => {
                setCatDetails({
                  ...catDetails,
                  breed_name: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"Nationality"}
              value={catDetails.nationality}
              onChange={(e) => {
                setCatDetails({
                  ...catDetails,
                  nationality: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"Price"}
              value={catDetails.price}
              onChange={(e) => {
                setCatDetails({
                  ...catDetails,
                  price: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"Description"}
              value={catDetails.description}
              onChange={(e) => {
                setCatDetails({
                  ...catDetails,
                  description: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"Image url"}
              value={catDetails.image_url}
              onChange={(e) => {
                setCatDetails({
                  ...catDetails,
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
  );
};
export default CreateCats;
