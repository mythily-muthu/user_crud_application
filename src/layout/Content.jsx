import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewUser from "../pages/NewUser";
import NotFound from "../pages/NotFound";
import UpdateUser from "../pages/UpdateUser";
import Products from "../pages/Products";
import EditProducts from "../pages/EditProducts";
import CreateProducts from "../pages/CreateProducts";
import Cats from "../pages/Cats";
import CreateCats from "../pages/CreateCats";
import EditCats from "../pages/EditCats";
import Countries from "../pages/Countries";
import CreateCountries from "../pages/CreateCountries";
import EditCountries from "../pages/EditCountries";
import { Movies } from "../components/movies/Movies";
import CreateMovies from "../components/movies/CreateMovies";
import EditMovies from "../components/movies/EditMovies";

const Content = () => {
  return (
    <div className="w-full h-full flex bg-white">
      <BrowserRouter>
        <Routes>
          {/* user routse */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewUser />} />
          <Route path="/edit/:user_id" element={<UpdateUser />} />
          <Route path="*" element={<NotFound />} />
          {/* product routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/createproducts" element={<CreateProducts />} />
          <Route path="/editproduct/:product_id" element={<EditProducts />} />
          {/* cats routes */}
          <Route path="/cats" element={<Cats />} />
          <Route path="/createcats" element={<CreateCats />} />
          <Route path="/editcat/:cat_id" element={<EditCats />} />
          {/* countries routes */}
          <Route path="/countries" element={<Countries />} />
          <Route path="/createcountries" element={<CreateCountries />} />
          <Route path="/editcountry/:country_id" element={<EditCountries />} />
          {/* movies routes */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/createmovies" element={<CreateMovies />} />
          <Route path="/editmovie/:movie_id" element={<EditMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Content;
