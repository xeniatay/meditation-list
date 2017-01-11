import $ from 'jquery';

const TOPICS_PATH = 'http://warm-springs-61775.herokuapp.com/api/topics?enable=true&show=true&populate=subtopics&sort=order'
const SUBTOPIC_PATH = 'http://warm-springs-61775.herokuapp.com/api/days?sort=order&subtopic='

export default class WebApi {
  static getTopics() {
    return $.ajax({
      url: TOPICS_PATH
    })
  }

  static getSubtopic(id) {
    return $.ajax({
      url: SUBTOPIC_PATH + id
    })
  }
}
