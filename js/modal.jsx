/**
 * Modal based off http://codepen.io/chriscoyier/pen/MeJWoM
 */

import $ from 'jquery';
import _ from 'underscore';
import ClassNames from 'classnames'
import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  render() {
    return this.props.show
    ? (
      <div>
        <div
          className='modal-overlay'
          onClick={this.onHide}
        />
        <div className='modal'>
          <span
            className='close-button'
            onClick={this.onHide}
          >
            ×
          </span>
          <div className='modal-guts'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
    : null
  }

  onHide = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal()
    }
  }
}
