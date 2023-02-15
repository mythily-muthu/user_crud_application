//import React, { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [users, setUsers] = useState([]);

  let navigate = useNavigate();
  //let [userData, setUserData] = useState();
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log("user created");
    navigate("/create");
  };

  // edit
  const handleEdit = (id) => {
    console.log("user edited", id);
    navigate(`/edit/${id}`);
  };
  // delete
  const handleDelete = async (id) => {
    console.log("user deleted", id);
    alert("do you want to delete the user?");
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    getAllUser();
  };

  let user_data = [
    {
      id: 1,
      name: "muthu",
      email: "muthu@gamil.com",
      gender: "male",
      status: "active",
    },
    {
      id: 2,
      name: "muthu",
      email: "muthu@gamil.com",
      gender: "male",
      status: "active",
    },
    {
      id: 3,
      name: "muthu",
      email: "muthu@gamil.com",
      gender: "male",
      status: "active",
    },
    {
      id: 4,
      name: "muthu",
      email: "muthu@gamil.com",
      gender: "male",
      status: "active",
    },
  ];

  const getAllUser = async () => {
    let URL = "http://localhost:4000/api/users";
    let res = await axios.get(URL);
    console.log("users", res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-2 ">
      {/* title div */}

      <div className="flex  justify-between h-12  px-8 items-center py-10 ">
        <h3 className="text-stone-800 text-3xl  ">User List</h3>
        <button
          className=" flex justify-center rounded  bg-green-700 text-white px-3 py-1 cursor-pointer"
          onClick={handleAddUser}
        >
          Add user
        </button>
      </div>

      {/* table div */}
      <div className="flex w-full justify-center">
        <table className="w-full border-2 border-black ">
          <thead className="bg-violet-600 h-11 text-center text-white font-medium border-2 border-black ">
            <tr className="border-2 border-black">
              <td className="border-2 border-black w-[20%]">Name</td>
              <td className="border-2 border-black w-[15%]">Email</td>
              <td className="border-2 border-black w-[5%]">Gender</td>
              <td className="border-2 border-black w-[5%]">Status</td>
              <td className="border-2 border-black w-[10%]">Actions</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id} className="h-12">
                  <td className="border-2 text-center ">{user.name}</td>
                  <td className="border-2  text-center">{user.email}</td>
                  <td className="border-2  text-center">{user.gender}</td>
                  <td className="border-2  text-center">{user.status}</td>
                  <td className="border-2  text-center">
                    <div className="flex gap-x-2 items-center justify-center">
                      <button
                        onClick={() => handleEdit(user._id)}
                        className="rounded px-3 py-1 bg-green-600 cursor-pointer  items-center"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(user._id)}
                        className="rounded px-3 py-1 bg-red-600 cursor-pointer  items-center"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
