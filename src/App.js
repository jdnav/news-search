import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

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
    return (
      <Fragment>
        <Header title="React News API" />
        <div className="container white contenedor-noticias">

          <NewsList newsList={this.state.news}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
