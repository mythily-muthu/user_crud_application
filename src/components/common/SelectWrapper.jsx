import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";

const SelectWrapper = ({
  label,
  value,
  onChange,
  options,
  closeOptions = false,
}) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label className=" text-gray-500 ">{label}</label>
      {/* <input
      className=" rounded  p-2 border border-gray-400 outline-none"
      required
      placeholder={`enter the ${label}`}
      type="text"
      value={value}
      onChange={onChange}
    ></input> */}
      <Select
        closeMenuOnSelect={closeOptions}
        components={makeAnimated()}
        isMulti
        onChange={onChange}
        value={value}
        options={options}
      />
    </div>
  );
};

export default SelectWrapper;
