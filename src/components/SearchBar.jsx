import React from "react";

const SearchBar = ({ onChange, value, placeholder, type }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default SearchBar;
