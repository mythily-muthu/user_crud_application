import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  let navigate = useNavigate();

  let [userState, setUserState] = useState({
    name: "",
    gender: "",
    email: "@gmail.com",
    status: "active",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let URL = "http://localhost:4000/api/users";
    await axios.post(URL, userState);

    navigate("/");

    // await axios.post("url", userState);
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    console.log("welcome to home page");
    navigate("/");
  };

  const handleOnChange = (e, field) => {
    setUserState({ ...userState, [field]: e.target.value });
  };

  return (
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
              <h3 className="text-3xl">Create new user</h3>
            </div>

            <div className="flex flex-col items-center justify-center  w-screen h-full ">
              <div className=" flex flex-col ">
                <label className=" py-5  text-gray-500">Name</label>
                <input
                  className=" rounded px-10 py-2 border border-gray-400 outline-none "
                  required
                  placeholder="Name"
                  type="text"
                  value={userState.name}
                  onChange={(e) => handleOnChange(e, "name")}
                ></input>
              </div>

              <div className="flex flex-col">
                <label className="py-5 text-gray-500">Email</label>
                <input
                  className=" rounded px-10 py-2 border border-gray-400 outline-none"
                  required
                  placeholder="Email"
                  type="text"
                  value={userState.email}
                  onChange={(e) => {
                    setUserState({ ...userState, email: e.target.value });
                  }}
                ></input>
              </div>

              <div className="flex flex-col">
                <label className="py-5 text-gray-500">Gender</label>
                <input
                  className=" rounded px-10 py-2 border border-gray-400 outline-none"
                  required
                  placeholder="gender"
                  type="text"
                  value={userState.gender}
                  onChange={(e) => {
                    setUserState({ ...userState, gender: e.target.value });
                  }}
                ></input>
              </div>

              {/* <div className="flex py-5 ml-20 ">
                <div className="flex ml-5 ">
                  <label className="py-5 text-gray-500 ">Gender</label>
                </div>
                <div className="flex ml-10 gap-3">
                  <input
                    className="  "
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => {
                      setUserState(e.target.value);
                    }}
                  />
                  male
                  <input
                    className=""
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => {
                      setUserState(e.target.value);
                    }}
                  />
                  female
                  <input
                    className=" "
                    type="radio"
                    name="gender"
                    value="others"
                    onChange={(e) => {
                      setUserState(e.target.value);
                    }}
                  />
                  others
                </div>
              </div>

              */}

              <div className="flex mr-16 py-10 ">
                <label className=" mr-14 text-gray-500">Status</label>
                <div className="flex gap-1 ">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={userState.status === "active"}
                    onChange={(e) => {
                      setUserState({ ...userState, status: e.target.value });
                    }}
                  />
                  active
                </div>
                <div className=" flex gap-1">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    onChange={(e) => {
                      setUserState({ ...userState, status: e.target.value });
                    }}
                  />
                  inactive
                </div>
              </div>

              <div className="py-1">
                <button
                  className=" py-1 px-10 w-full flex bg-green-600 text-white rounded cursor-pointer items-center"
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
  );
};

export default NewUser;
