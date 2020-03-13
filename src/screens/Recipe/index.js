import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer';

class Recipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RecipeContainer {...this.props} />;
  }
}

export default Recipe;
