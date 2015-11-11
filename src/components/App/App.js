/* @flow */

import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render(): any {
    return (
      <div>
        <h1>from App component</h1>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.any
// }
