import React, { Component } from 'react';

import styles from './Settings.css';

class Settings extends Component {
    render() {
        return (
            <div>
               <span>Settings</span> 
                <h3>Types of shows</h3>
                <div className={styles.contentTypes}>
                    <form>
                        <div>
                            <input type="checkbox" id="talkShow" />
                            <label htmlFor="talkShow">Talk Show</label>
                        </div>
                        <div>
                            <input type="checkbox" id="documentary" />
                            <label htmlFor="documentary">Documentary</label>
                        </div>
                        <div>
                            <input type="checkbox" id="news" />
                            <label htmlFor="news">News</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scripted" />
                            <label htmlFor="scripted">Scripted</label>
                        </div>
                        <div>
                            <input type="checkbox" id="animation"/>
                            <label htmlFor="animation">Animation</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reality" />
                            <label htmlFor="reality">Reality</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;