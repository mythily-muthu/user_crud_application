import React from "react";

const InputWrapper = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-y-3 ">
      <label className=" text-gray-500">{label}</label>
      <input
        className=" rounded  p-2 border border-gray-400 outline-none "
        required
        placeholder={`enter the ${label}`}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputWrapper;
