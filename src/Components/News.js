import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"

export default class News extends Component {
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

  // Api Call
  async componentDidMount() {
    // this will run after render, Setting state here will trigger re-rendering.
    this.setState({
      loading: true,
    })
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();

    // method to set state.
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevious = async () => {
    this.setState({
      loading: true,
    })
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${
      this.state.page > 1 ? this.state.page - 1 : this.state.page
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page > 1 ? this.state.page - 1 : this.state.page,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleNext = async () => {
    this.setState({
      loading: true,
    })
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=50bc9a02b6d54bbe956ed6c6f40f37f4&page=${
      Math.ceil(this.state.totalResults / this.props.pagesize) >= this.state.page + 1
        ? this.state.page + 1
        : this.state.page
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      page:
        Math.ceil(this.state.totalResults / this.props.pagesize) >= this.state.page + 1
          ? this.state.page + 1
          : this.state.page,
      articles: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
      <div>
        
        <div className="container my-4">
          <h2 className="text-center">NewsSpy - Spy of the World</h2>
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
                  />
                </div>
              );
            })}
          </div>
         {this.state.loading && <Spinner />}
          <div className="d-flex justify-content-between my-4">
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
                Math.ceil(this.state.totalResults / this.props.pagesize) >= this.state.page + 1
                  ? false
                  : true
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
