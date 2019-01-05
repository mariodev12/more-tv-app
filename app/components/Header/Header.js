import React, { Component } from 'react';
import styles from './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCog, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const moment = require('moment');

class Header extends Component {
    render() {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.left}>
                    <span className={styles.date}>{moment().format("dddd, Do MMMM")}</span>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>Today</h2>
                        <FontAwesomeIcon 
                            icon={faCalendarAlt}
                            className={styles.calendarIcon}
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <FontAwesomeIcon 
                        icon={faCog} 
                        className={styles.settingsIcon}
                    />
                </div>
            </div>
        );
    }
}

export default Header;