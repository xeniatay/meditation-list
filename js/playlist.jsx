import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Playlist extends React.Component {
  render() {
    return (
      <ol className='playlist'>
        {_.map(this.props.subtopic, (file, index) => {
          return (
            <li key={index}>
              {file.title}
            </li>
          )
        })}
      </ol>
    )
  }
}
