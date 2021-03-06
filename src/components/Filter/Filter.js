import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <label htmlFor="">
      <input type="text" value={value} onChange={onChange} />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
