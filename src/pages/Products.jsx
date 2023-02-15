import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  const getAllProducts = async () => {
    let URL = "http://localhost:4000/api/products";
    let res = await axios.get(URL);
    console.log(res.data);
    setProducts(res.data);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("welcome to add product page");
    navigate("/createproducts");
  };
  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };
  const handleDelete = async (id) => {
    alert("Are you sure , you want to delete?");
    console.log("deleted");
    await axios.delete(`http://localhost:4000/api/products/${id}`);
    getAllProducts();
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  let items = [
    {
      id: 1,
      Product_name: "iphone",
      Price: "50000",
      Description: "the good one",
      Image_url: "sdlfk.jpeg",
    },
    {
      id: 2,
      Product_name: "iphone",
      Price: "50000",
      Description: "the good one",
      Image_url: "sdlfk.jpeg",
    },
    {
      id: 3,
      Product_name: "iphone",
      Price: "50000",
      Description: "the good one",
      Image_url: "sdlfk.jpeg",
    },
    {
      id: 4,
      Product_name: "iphone",
      Price: "50000",
      Description: "the good one",
      Image_url: "sdlfk.jpeg",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-y-2 ">
      <div className="flex  justify-between h-12  px-8 items-center py-10 ">
        <h3 className="text-stone-800 text-3xl  ">Product List</h3>
        <button
          className="flex justify-center rounded  bg-green-700 text-white px-3 py-1 cursor-pointer"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <div className="flex w-full justify-center">
        <table className="w-full  border-2 border-black ">
          <thead className="bg-violet-600 h-11 text-center text-white font-medium border-2 border-black ">
            <tr className="border-2 border-black">
              <td className="border-2 border-black w-[10%]">Product_name</td>
              <td className="border-2 border-black w-[10%]">Price</td>
              <td className="border-2 border-black w-[20%]">Description</td>
              <td className="border-2 border-black w-[15%]">Image_url</td>
              <td className="border-2 border-black w-[10%]">Actions</td>
            </tr>
          </thead>

          <tbody className=" ">
            {products.map((product) => {
              return (
                <tr className="h-12" key={product._id}>
                  <td className="border-2 text-center text-black ">
                    {product.product_name}
                  </td>
                  <td className="border-2 text-center">{product.price}</td>
                  <td className="border-2  text-center">
                    {product.description}
                  </td>
                  <td className="border-2  text-center p-3 flex  items-center justify-center">
                    <img
                      className="w-14 h-14 object-cover  "
                      src={product.image_url}
                      alt={product.product_name}
                    />
                  </td>
                  <td className="border-2  text-center">
                    <div className="flex gap-x-2 items-center justify-center">
                      <button
                        className="rounded px-3 py-1 bg-green-600 cursor-pointer  items-center"
                        onClick={() => handleEdit(product._id)}
                      >
                        Edit
                      </button>

                      <button
                        className="rounded px-3 py-1 bg-red-600 cursor-pointer  items-center"
                        onClick={() => handleDelete(product._id)}
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

export default Products;
