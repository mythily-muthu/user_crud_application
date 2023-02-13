import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewUser from "../pages/NewUser";
import NotFound from "../pages/NotFound";
import UpdateUser from "../pages/UpdateUser";

const Content = () => {
  return (
    <div className="w-full h-full flex bg-white">
      <BrowserRouter>
        {/* <div className="flex bg-black p-5 items-center justify-evenly w-full ">
          <button className=" text-white text-xl ">Home</button>
          <button className=" text-white text-xl ">About</button>
          <Link to="/create" className=" text-white text-xl ">
            New User
          </Link>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewUser />} />
          <Route path="/edit/:user_id" element={<UpdateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Content;
