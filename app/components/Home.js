// @flow
import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import styles from './Home.css';

import Header from './Header/Header';


const moment = require('moment-timezone');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.networkRequest();
    console.log(localStorage.getItem('settings'));
  }

  addZero = (season, episode) => {
    return `S${season > 9 ? '' : '0'}${season}E${episode > 9 ? '' : '0'}${episode}`
  }

  networkRequest = () => {
    setTimeout(() => {
      fetch(`http://api.tvmaze.com/schedule?country=US&date=${moment().tz("America/Los_Angeles").format('YYYY-MM-DD')}`)
      .then(data => data.json())
      .then((data) => (
        this.setState({
          data
        })
      ))
      .catch( err => {
        console.log(err)
      })
    }, 2000);
  }

  renderElements = () => {
    const { data } = this.state;
    console.log(data)
    return data
      .filter((item) => {
        return item.show.type === "Scripted"
      })
      .map((item) => (
        <div className={styles.contentElement} key={item.id}>
          <span className={styles.titleElement}>{item.show.name}</span>
          <div>
            <span className={styles.episodeElement}>{item.name}</span>
          </div>
          <span>{this.addZero(item.season, item.number)}</span>
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
      <div className={styles.contentLoading}>
        <BarLoader
          sizeUnit={"px"}
          size={150}
        />
      </div>
    )
  }
}
