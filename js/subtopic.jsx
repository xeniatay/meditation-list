import _ from 'underscore';
import ClassNames from 'classnames'
import React from 'react';
import ReactDOM from 'react-dom';

const SUBTOPIC_IMAGE_PATH = 'https://bucketeer-760d0a32-a78c-4335-9090-9206d2933331.s3.amazonaws.com/'

export default class Subtopic extends React.Component {
  render() {
    const className = ClassNames('col-6', 'col-sm-3', 'col-lg-2')
    const backgroundUrl = SUBTOPIC_IMAGE_PATH + encodeURIComponent(this.props.image)

    return (
      <div
        className={className}
      >
        <div
          className='subtopic'
          style={{
            backgroundImage: 'url(' + backgroundUrl + ')'
          }}
          onClick={_.partial(this.props.onClickSubtopic, this.props.id)}
        >
            <span className='subtopic-text'>
              {this.props.name}
            </span>
        </div>
      </div>
    )
  }
}
