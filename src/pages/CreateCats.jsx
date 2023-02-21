import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";

const CreateCats = () => {
  let navigate = useNavigate();

  let [petCats, setPetCats] = useState({
    image_url: "",
    Bread_Name: "",
    Price: "",
    Nationality: "",
    Description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let URL = "http://localhost:4000/api/cats";
    await axios.post(URL, petCats);
    navigate("/cats");

    // await axios.post("url", userState);
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/cats");
  };

  const handleOnChange = (e, field) => {
    setPetCats({ ...petCats, [field]: e.target.value });
  };

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
                <h3 className="text-3xl">Create new cat page</h3>
              </div>

              <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
                <InputWrapper
                  label={"Breed_Name"}
                  value={petCats.Bread_Name}
                  onChange={(e) => {
                    setPetCats({
                      ...petCats,
                      Bread_Name: e.target.value,
                    });
                  }}
                />
                <InputWrapper
                  label={"Nationality"}
                  value={petCats.Nationality}
                  onChange={(e) => {
                    setPetCats({
                      ...petCats,
                      Nationality: e.target.value,
                    });
                  }}
                />
                <InputWrapper
                  label={"Price"}
                  value={petCats.Price}
                  onChange={(e) => {
                    setPetCats({
                      ...petCats,
                      Price: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Description"}
                  value={petCats.Description}
                  onChange={(e) => {
                    setPetCats({
                      ...petCats,
                      Description: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Image url"}
                  value={petCats.image_url}
                  onChange={(e) => {
                    setPetCats({
                      ...petCats,
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
export default CreateCats;
