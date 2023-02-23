import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Countries = () => {
  let navigate = useNavigate();
  let [countryDetails, setCountryDetails] = useState([]);

  const getAllCountries = async () => {
    let res = await axios.get("http://localhost:4000/api/countries");
    console.log(res.data);
    setCountryDetails(res.data);
  };
  let handleEdit = (id) => {
    navigate(`/editcountry/${id}`);
  };
  let handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          axios.delete(`http://localhost:4000/api/countries/${id}`);
        } else {
          swal("Your imaginary file is safe!");
        }
      })
      .then(() => getAllCountries());
  };

  let handleBack = () => {
    navigate("/countries");
  };
  let handleAddCountry = () => {
    navigate("/createcountries");
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <div className="w-full h-full justify-center items-center">
      <h1 className="flex justify-center text-4xl font-medium p-2">
        Country Cards
      </h1>
      <div className="flex fixed right-0 top-50 p-4 gap-2">
        <button
          className="flex justify-center rounded  bg-green-700 text-white px-3 py-1 cursor-pointer"
          onClick={handleAddCountry}
        >
          Add Country
        </button>
        <button
          className="flex justify-center rounded  bg-red-700 text-white px-3 py-1 cursor-pointer"
          onClick={handleBack}
        >
          Back
        </button>
      </div>

      <div className="flex justify-start p-5 gap-3 flex-wrap py-10">
        {countryDetails.map((country) => {
          return (
            <div
              key={country._id}
              className="h-fit gap-3 p-2 justify-center bg-gray-400 rounded-lg flex flex-col   "
            >
              <img
                src={country.flag_image_url}
                alt={country.country_name}
                className="w-56 object-cover h-36 "
              />
              <div className="gap-y-2">
                <h2 className="text-lg font-medium justify-center flex">
                  {country.country_name}
                </h2>
                <h3>
                  <span className="text-base font-bold">Popution:</span>
                  {country.population}
                </h3>
                <h3>
                  <span className="text-base font-bold">$:</span>
                  {country.currency}
                </h3>
                <h3>
                  <span className="text-base font-bold">Capital:</span>
                  {country.capital}
                </h3>
              </div>
              <div className="flex justify-end gap-1">
                <button
                  className="rounded px-2  bg-green-500 cursor-pointer items-center text-white"
                  onClick={() => handleEdit(country._id)}
                >
                  Edit
                </button>
                <button
                  className="rounded px-2  bg-red-500 cursor-pointer items-center text-white"
                  onClick={() => handleDelete(country._id)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
