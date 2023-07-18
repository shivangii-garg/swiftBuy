import React from "react";
import "../../genericCSS.css";

const Dropdown = ({
  options,
  dropdownClassName = "dropdown-select",
  optionClassName = "dropdown-option",
  style = {},
}) => {
  return (
    <select className={dropdownClassName} style={style}>
      {options.map((option, index) => {
        return (
          <option className={optionClassName} key={index}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
