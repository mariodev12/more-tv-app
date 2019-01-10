// @flow
import React, { Component } from 'react';
import styles from './Home.css';

import Header from './Header/Header';

const moment = require('moment');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(`http://api.tvmaze.com/schedule?country=US&date=${moment().format('YYYY-MM-DD')}`)
      .then(data => data.json())
      .then((data) => (
        this.setState({
          data
        })
      ))
      .catch( err => {
        console.log(err)
      })
  }

  renderElements = () => {
    const { data } = this.state;
    console.log(data)
    return data.map((item) => (
        <div className={styles.contentElement} key={item.id}>
          <span className={styles.titleElement}>{item.show.name}</span>
          <div>
            <span className={styles.episodeElement}>{item.name}</span>
          </div>
          <span>S{item.season}E{item.number}</span>
        </div>
    ))
  }
  
  render() {
    const { data } = this.state; 
    if (data.length > 0) {
      return (
        <div className={styles.container} data-tid="container">
          <Header />
          <div className={styles.content}>
            {this.renderElements()}
          </div>
        </div>
      );
    }
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
}
