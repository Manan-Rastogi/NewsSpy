import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handlePages = async (pages) => {
    props.setProgress(10);
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${pages}&pagesize=${props.pagesize}`;
    let data = await fetch(apiUrl);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(75);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    setLoading(true);
    handlePages(1);
    document.title = `NewsSpy ${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    }`;
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
   

    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${page + 1}&pagesize=${
      props.pagesize
    }`;
    setPage(page + 1);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <div className="container my-4">
        <h2 className="text-center" style={{marginTop:"70px", marginBottom:"30px"}}>
          NewsSpy - Top{" "}
          {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
          Headlines
        </h2>

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                {/* A unique key needs to be provided in such cases. */}
                <NewsItem
                  title={
                    element.title && element.title.length > 40
                      ? element.title.slice(0, 40) + "..."
                      : element.title
                  }
                  description={
                    element.description && element.description.length > 97
                      ? element.description.slice(0, 97) + "..."
                      : element.description
                  }
                  img={
                    element.urlToImage === null
                      ? require("../Images/NoPreview.jpg")
                      : element.urlToImage
                  }
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          // loader={loading && <Spinner />}
        ></InfiniteScroll>

        {loading && <Spinner />}
        {/* <div className="d-flex justify-content-between my-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePrevious}
              disabled={page > 1 ? false : true}
            >
              &larr; Previous
            </button>
            <span className="border border-dark rounded px-2 pt-1">
              <strong>{page}</strong>
            </span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
              disabled={
                Math.ceil(totalResults / props.pagesize) >=
                page + 1
                  ? false
                  : true
              }
            >
              Next &rarr;
            </button>
          </div> */}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 20,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
