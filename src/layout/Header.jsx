import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a className="text-gray-300 hover:text-white" href="/">
          My App
        </a>
        <div>
          <a className="text-gray-300 hover:text-white mr-4" href="/">
            Users
          </a>
          <a className="text-gray-300 hover:text-white" href="/products">
            Products
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
