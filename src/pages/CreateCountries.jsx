import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";

const CreateCountries = () => {
  let navigate = useNavigate();

  let [countries, setCountries] = useState({
    country_name: "",
    population: "",
    currency: "",
    flag_image_url: "",
    capital: "",
  });

  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/countries", countries);
  };

  let handleBack = (e) => {
    e.preventDefault();
    navigate("/countries");
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
                <h3 className="text-3xl">Create your favourite country page</h3>
              </div>

              <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
                <InputWrapper
                  label={"country_name"}
                  value={countries.country_name}
                  onChange={(e) => {
                    setCountries({
                      ...countries,
                      country_name: e.target.value,
                    });
                  }}
                />
                <InputWrapper
                  label={" population"}
                  value={countries.population}
                  onChange={(e) => {
                    setCountries({
                      ...countries,
                      population: e.target.value,
                    });
                  }}
                />
                <InputWrapper
                  label={"currency"}
                  value={countries.currency}
                  onChange={(e) => {
                    setCountries({
                      ...countries,
                      currency: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"flag_image_url"}
                  value={countries.flag_image_url}
                  onChange={(e) => {
                    setCountries({
                      ...countries,
                      flag_image_url: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"capital"}
                  value={countries.capital}
                  onChange={(e) => {
                    setCountries({
                      ...countries,
                      capital: e.target.value,
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

export default CreateCountries;
