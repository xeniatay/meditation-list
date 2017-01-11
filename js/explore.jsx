import $ from 'jquery';
import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import Topic from './topic.jsx';
import Modal from './modal.jsx';
import Playlist from './playlist.jsx';
import WebApi from './web-api.js';

class Explore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topics: null,
      subtopics: {},
      showModal: false
    }
  }

  componentDidMount() {
    WebApi.getTopics()
      .done((topics) => {
        this.setState({
          topics: topics
        })
      })
  }

  render() {
    return (
      <div className='container-fluid'>
        <h1>Explore Meditation</h1>
        {_.map(this.state.topics, (topic, index) => {
          return <Topic
            key={index}
            topic={topic}
            onClickSubtopic={this.onClickSubtopic}
          />
        })}
        {this.renderModal()}
      </div>
    )
  }

  renderModal() {
    return (
      <Modal
        show={this.state.showModal}
        onCloseModal={this.onCloseModal}
      >
        <Playlist subtopic={this.state.subtopics[this.state.activeSubtopic]}/>
      </Modal>
    )
  }

  onClickSubtopic = (id) => {
    this.setState({
      showModal: true,
      activeSubtopic: this.state.subtopics[id] ? id : null
    }, () => {
      if (!this.state.activeSubtopic) {
        WebApi.getSubtopic(id)
          .done((subtopic) => {
            console.log('get more ', subtopic)
            const subtopics = this.state.subtopics

            subtopics[id] = subtopic

            this.setState({
              subtopics: subtopics,
              activeSubtopic: id
            })
          })
      }
    })
  }

  onCloseModal = () => {
    this.setState({
      showModal: false,
      activeSubtopic: null
    })
  }
}

ReactDOM.render(<Explore/>, document.getElementById('explore'));
