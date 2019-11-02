import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    category: 'general'
  };

  // Handle select changes
  changeCategory = e => {
    this.setState({ category: e.target.value }, () => {
      // Take form to the main page
      this.props.getNews(this.state.category);
    });
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>News by category</h2>
            <div className="input-field col s12">
              <select onChange={this.changeCategory}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
    getNews: propTypes.func.isRequired
}

export default Form;
