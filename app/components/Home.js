// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(`http://api.tvmaze.com/schedule?country=US&date=2014-12-01`)
      .then(data => data.json())
      .then((data) => {
        this.setState({
          data: data
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  renderElements = () => {
    return this.state.data.map((item, k) => {
      return (
        <div className={styles.contentElement} key={k}>
          <span className={styles.titleElement}>{item.show.name}</span>
          <span className={styles.episodeElement}>{item.name}</span>
        </div>
      )
    })
  }
  
  render() {
    if (this.state.data.length > 0) {
      return (
        <div className={styles.container} data-tid="container">
          <h2 className="title">Today</h2>
          <div className={styles.content}>
            {this.renderElements()}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <span>Loading...</span>
        </div>
      )
    }
  }
}
