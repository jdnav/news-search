import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Form from "./components/Form";

class App extends Component {
  state = {
    news: []
  };

  // When ready
  async componentDidMount() {
    this.getNews();
  }

  getNews = async (category = "general", country = "gb") => {
    const API_KEY = "1144f0714b214488a81cb9054747ed8f";
    const url =
      "https://newsapi.org/v2/top-headlines?country=" +
      country +
      "&category=" +
      category +
      "&apiKey=" +
      API_KEY;

    const response = await fetch(url);
    const news = await response.json();

    this.setState(
      {
        news: news.articles
      },
      () => {
        console.log("new selection");
        console.log(this.state.news);
      }
    );
  };

  render() {
    return (
      <Fragment>
        <Header title="React News API" />
        <div className="container white news-container">
          <Form getNews={this.getNews} />
          <NewsList newsList={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
