import React from "react";

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
            target="_blank"
            className="waves-effect waves-light btn"
          >
            Go to new
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
