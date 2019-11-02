import React from "react";
import PropTypes from "prop-types";

const New = ({ newItem }) => {
  // Extract New Data
  const { urlToImage, url, title, description, source } = newItem;

  // load image if not available
  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank" rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  newItem: PropTypes.object.isRequired
}

export default New;
