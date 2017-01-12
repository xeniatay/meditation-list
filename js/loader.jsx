/**
 * Loader from https://projects.lukehaas.me/css-loaders/
 */

import '../css/loader.scss'
import ClassNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Loader extends React.Component {
  render() {
    const className = ClassNames('loader', {
      dark: this.props.dark
    })

    return <div className={className}>Loading...</div>
  }
}
