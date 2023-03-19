import React from "react";

 const NewsItem = (props) => {
 
    let { title, description, img, url, author, date, source } = props;

    return (
      <div className="my-3">
        <span className="badge text-bg-danger">{source}</span>
        <div className="card">
          <img
            src={img}
            height={"150"}
            width={"100%"}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text mt-2">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toTimeString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
 
}


export default NewsItem