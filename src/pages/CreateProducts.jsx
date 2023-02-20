import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";

const CreateProducts = () => {
  let navigate = useNavigate();

  let [productState, setProductState] = useState({
    product_name: "",
    price: "",
    description: "",
    image_url: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let URL = "http://localhost:4000/api/products";
    await axios.post(URL, productState);

    navigate("/products");

    // await axios.post("url", userState);
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    console.log("welcome to products page");
    navigate("/products");
  };

  const handleOnChange = (e, field) => {
    setProductState({ ...productState, [field]: e.target.value });
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
                <h3 className="text-3xl">Create new product</h3>
              </div>

              <div className="flex flex-col items-center justify-center  w-full h-full gap-y-2 ">
                <InputWrapper
                  label={"Product Name"}
                  value={productState.product_name}
                  onChange={(e) => {
                    setProductState({
                      ...productState,
                      product_name: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Price"}
                  value={productState.price}
                  onChange={(e) => {
                    setProductState({
                      ...productState,
                      price: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Description"}
                  value={productState.description}
                  onChange={(e) => {
                    setProductState({
                      ...productState,
                      description: e.target.value,
                    });
                  }}
                />

                <InputWrapper
                  label={"Image url"}
                  value={productState.image_url}
                  onChange={(e) => {
                    setProductState({
                      ...productState,
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
export default CreateProducts;
