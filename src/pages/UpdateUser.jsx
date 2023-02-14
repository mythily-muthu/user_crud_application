import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  let navigate = useNavigate();

  let [userState, setUserState] = useState({
    name: "",
    gender: "",
    email: "@gmail.com",
    status: "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("updated your user data");
    await axios.post("url", userState);
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    console.log("back to home page");
    navigate("/");
  };

  return (
    <div>
      <div className="h-full w-full flex flex-col  ">
        <form className="container" onSubmit={handleUpdate}>
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
              <h3 className="text-3xl">Update user</h3>
            </div>

            <div className="flex flex-col items-center justify-center  w-screen h-full ">
              <div className=" flex flex-col ">
                <label className=" py-5  text-gray-500">Name</label>
                <input
                  className=" rounded px-10 py-2 border border-gray-400 outline-none"
                  required
                  placeholder="Name"
                  type="text"
                  value={userState.name}
                  onChange={(e) => {
                    setUserState({ ...setUserState, name: e.target.value });
                  }}
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
                    setUserState({ ...setUserState, email: e.target.value });
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
                    setUserState({ ...setUserState, gender: e.target.value });
                  }}
                ></input>
              </div>

              <div className="flex mr-16 py-10 ">
                <label className=" mr-14 text-gray-500">Status</label>
                <div className="flex gap-1 ">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    onChange={(e) => {
                      setUserState({ ...setUserState, status: e.target.value });
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
                      setUserState({ ...setUserState, status: e.target.value });
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
