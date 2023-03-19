import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 20,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];
  constructor() {
    super();
    // Setting State in class based components
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  handlePages = async (pages) => {
    this.props.setProgress(10);
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${pages}&pagesize=${this.props.pagesize}`;
    let data = await fetch(apiUrl);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(75);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };

  // Api Call
  async componentDidMount() {
    // this will run after render, Setting state here will trigger re-rendering.
    this.setState({
      loading: true,
    });
    this.handlePages(1);
    document.title = `NewsSpy ${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }

  // handlePrevious = async () => {
  //   this.setState({
  //     loading: true,
  //     page: this.state.page > 1 ? this.state.page - 1 : this.state.page,
  //   });
  //   this.handlePages(
  //     this.state.page > 1 ? this.state.page - 1 : this.state.page
  //   );
  // };

  fetchMoreData = async () => {
    this.setState({
      loading: true,
      page: this.state.page + 1,
    });
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };

  // handleNext = async () => {
  //   this.setState({
  //     loading: true,
  //     page:
  //       Math.ceil(this.state.totalResults / this.props.pagesize) >=
  //       this.state.page + 1
  //         ? this.state.page + 1
  //         : this.state.page,
  //   });
  //   this.handlePages(
  //     Math.ceil(this.state.totalResults / this.props.pagesize) >=
  //       this.state.page + 1
  //       ? this.state.page + 1
  //       : this.state.page
  //   );
  // };
 
  render() {
    return (
      <div>
        <div className="container my-4">
          <h2 className="text-center">
            NewsSpy - Top{" "}
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}{" "}
            Headlines
          </h2>

          <div className="row">
            {this.state.articles.map((element) => {
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
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.articles.length !== this.state.totalResults}
            // loader={this.state.loading && <Spinner />}
          ></InfiniteScroll>

          {this.state.loading && <Spinner />}
          {/* <div className="d-flex justify-content-between my-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlePrevious}
              disabled={this.state.page > 1 ? false : true}
            >
              &larr; Previous
            </button>
            <span className="border border-dark rounded px-2 pt-1">
              <strong>{this.state.page}</strong>
            </span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleNext}
              disabled={
                Math.ceil(this.state.totalResults / this.props.pagesize) >=
                this.state.page + 1
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
  }
}
