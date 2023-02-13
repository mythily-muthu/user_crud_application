//import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
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
  const handleDelete = () => {
    console.log("user deleted");
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

  return (
    <div className="w-full h-full flex flex-col gap-y-2 ">
      {/* title div */}
      <div className="flex h-12 justify-between p-4 items-center">
        <h3 className="text-stone-800 text-2xl">User List</h3>
        <button
          className="rounded bg-green-700 text-white px-4 py-2 cursor-pointer"
          onClick={handleAddUser}
        >
          Add user
        </button>
      </div>

      {/* table div */}
      <div className="flex w-full">
        <table className="w-full ">
          <thead className="bg-teal-700 text-white h-10">
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Gender</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            {user_data.map((user) => {
              return (
                <tr key={user.id} className="h-10 ">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td>
                    <div className="flex gap-x-2 items-center ">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="rounded px-3 py-1 bg-green-600 cursor-pointer"
                      >
                        Edit
                      </button>

                      <button
                        onClick={handleDelete}
                        className="rounded px-3 py-1 bg-red-600 cursor-pointer"
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
