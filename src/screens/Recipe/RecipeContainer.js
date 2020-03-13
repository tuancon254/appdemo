import React, { Component } from 'react';
import RecipeView from './RecipeView';

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RecipeView {...this.props} />;
  }
}

export default RecipeContainer;
