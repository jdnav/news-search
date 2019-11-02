import React from "react";
import New from "./New";
import PropTypes from "prop-types";

const NewsList = ({ newsList }) => (
  <div className="row">
    {newsList.map(item => (
      <New key={item.url} newItem={item} />
    ))}
  </div>
);

NewsList.propTypes = {
  newsList: PropTypes.array.isRequired
};

export default NewsList;
