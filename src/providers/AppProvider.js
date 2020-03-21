import React, { Component } from 'react';
import firebase from '../services/FirebaseConfig';

export const AppContext = React.createContext(null);

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const database = firebase.database();

    database
      .ref()
      .child('/')
      .on('value', snap => {
        const data = snap.val();
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <AppContext.Provider value={data}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
