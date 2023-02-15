import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-10 items-center bg-gray-200 p-4 justify-between">
      {/* left div */}
      <div className="flex">left</div>

      {/* right div */}
      <div className="flex">right</div>
    </div>
  );
};

export default Header;
