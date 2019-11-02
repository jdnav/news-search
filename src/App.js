import React, { Component } from "react";

class App extends Component {
  state = {
    news: []
  };

  // When ready
  async componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const API_KEY = "1144f0714b214488a81cb9054747ed8f";
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
      API_KEY;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    });
  };

  render() {
    return <h1>News page</h1>;
  }
}

export default App;
