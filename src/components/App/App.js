/* @flow */

import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render(): any {
    return (
      <div>
        <p>Rendering App component (with JS)</p>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.any
// }
