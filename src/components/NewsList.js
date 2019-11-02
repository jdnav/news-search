import React from "react";
import New from "./New";

const NewsList = ({ newsList }) => (
  <div className="row">
    {newsList.map(item => (
      <New key={item.url} newItem={item} />
    ))}
  </div>
);

export default NewsList;
