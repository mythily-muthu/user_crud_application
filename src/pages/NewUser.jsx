import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  let navigate = useNavigate();

  let [users, setUsers] = useState({
    name: "",
    gender: "",
    email: "@gmail.com",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  //handle back functin
  const handleBack = (e) => {
    e.preventDefault();
    console.log("done");
    navigate("/");
  };

  return (
    <div>
      <div className="bg-gray-300 h-screen w-full ">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="my-5 text-2xl font-medium flex justify-center">
              <h2 className="p-10">Create new user</h2>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center p-10 w-full ">
                <div className=" flex flex-col  ">
                  <label className="p-5 mx-5">Name</label>
                  <input
                    className="w-[300px] rounded mx-10 p-2"
                    required
                    placeholder="Name"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label className="p-5 mx-5">Gender</label>
                  <input
                    className="w-[300px] rounded mx-10 p-2"
                    required
                    placeholder="Gender"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label className="p-5 mx-5">Email</label>
                  <input
                    className="w-[300px] rounded mx-10 p-2"
                    required
                    placeholder="Email"
                    type="text"
                  ></input>
                </div>

                <div className="mt-10 flex gap-5">
                  <button
                    className="p-2 bg-slate-900 text-white rounded"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="p-2 bg-slate-900 text-white rounded"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
