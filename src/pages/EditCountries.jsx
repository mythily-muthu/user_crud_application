import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";

const EditCountries = () => {
  let navigate = useNavigate();
  let params = useParams();
  console.log("params:", params);
  let [countryState, setCountryState] = useState({
    country_name: "",
    population: "",
    currency: "",
    flag_image_url: "",
    capital: "",
  });

  const handleBack = async (e) => {
    e.preventDefault();
    navigate("/countries");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/countries/${params.country_id}`);
    navigate("/countries");
  };

  const getSingleCat = async () => {
    let res = await axios.get(
      `http://localhost:4000/api/countries/${params.country_id}`
    );
    console.log(res.data);
    setCountryState(res.data);
  };

  useEffect(() => {
    getSingleCat();
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
            <h3 className="text-3xl">Edit your country page</h3>
          </div>

          <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
            <InputWrapper
              label={" country_name"}
              value={countryState.country_name}
              onChange={(e) => {
                setCountryState({
                  ...countryState,
                  country_name: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"population"}
              value={countryState.population}
              onChange={(e) => {
                setCountryState({
                  ...countryState,
                  population: e.target.value,
                });
              }}
            />
            <InputWrapper
              label={"currency"}
              value={countryState.currency}
              onChange={(e) => {
                setCountryState({
                  ...countryState,
                  currency: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"flag_image_url"}
              value={countryState.flag_image_url}
              onChange={(e) => {
                setCountryState({
                  ...countryState,
                  flag_image_url: e.target.value,
                });
              }}
            />

            <InputWrapper
              label={"capital"}
              value={countryState.capital}
              onChange={(e) => {
                setCountryState({
                  ...countryState,
                  capitall: e.target.value,
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

export default EditCountries;
