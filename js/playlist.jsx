import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './loader.jsx';

export default class Playlist extends React.Component {
  render() {
    return this.props.subtopic
      ? (
        <ol className='playlist'>
          {_.map(this.props.subtopic, (file, index) => {
            return (
              <li key={index}>
                {file.title}
              </li>
            )
          })}
        </ol>
      ) : <Loader/>
  }
}
