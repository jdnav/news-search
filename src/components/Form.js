import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    category: "general",
    country: "gb"
  };

  // Handle select "category" changes
  changeCategory = e => {
    this.setState({ category: e.target.value }, () => {
      // Take form to the main page
      this.props.getNews(this.state.category, this.state.country);
    });
  };

  // Handle select "country" changes
  changeCountry = e => {
    this.setState({ country: e.target.value }, () => {
      // Take form to the main page
      this.props.getNews(this.state.category, this.state.country);
    });
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Category & Country</h2>
            <div className="input-field col s12">
              <select onChange={this.changeCategory}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
              <select onChange={this.changeCountry}>
                <option value="gb">United Kingdom</option>
                <option value="de">Germany</option>
                <option value="us">United States</option>
                <option value="cn">China</option>
                <option value="fr">France</option>
                <option value="it">Italy</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  getNews: PropTypes.func.isRequired
};

export default Form;
