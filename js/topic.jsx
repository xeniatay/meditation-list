import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Subtopic from './subtopic.jsx';

export default class Topic extends React.Component {
  render() {
    const topic = this.props.topic

    return (
      <div className='topic'>
        <h2>{topic.name}</h2>
        <div className='topic-rows row'>
          {_.map(topic.subtopics, (subtopic, index) => {
            return <Subtopic
              key={index}
              name={subtopic.name}
              image={subtopic.image}
              id={subtopic._id}
              onClickSubtopic={this.props.onClickSubtopic}
            />
          })}
        </div>
      </div>
   )
  }
}
