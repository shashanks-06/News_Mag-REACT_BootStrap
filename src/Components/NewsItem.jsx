import imgNotAvailable from "/img/Image_not_available.png";

const NewsItem = ({ title, author, description, url, src }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{
        maxWidth: "345px",
      }}
    >
      <img
        src={src ? src : imgNotAvailable}
        style={{
          height: "200px",
          width: "100%",
        }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Null/Undefined"}
        </h5>
        <h6 className="card-text">
          <b>{author ? author.slice(0, 40) : "Null/Undefined"}</b>
        </h6>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News information is not provided. Kindly click on Read More... button to know more about the above article."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
