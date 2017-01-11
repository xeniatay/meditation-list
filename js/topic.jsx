import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';

class Topic extends React.Component {
  render() {
    return <h1>Topic World</h1>
  }
}

ReactDOM.render(<Topic/>, document.getElementById('hello'));
