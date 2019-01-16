import React, { Component } from 'react';

import styles from './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: new Map()
        }
    }

    handleCheckbox = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ options: prevState.options.set(item, isChecked)}));
    }

    handleSaveButton = () => {
        const {options} = this.state;
        console.log(options)
        const {history} = this.props;
        localStorage.setItem('settings', JSON.stringify([...options]));
        history.push('/');
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.contentTypes}>
                    <div>
                        <h1 className={styles.title}>Settings</h1>
                    </div>
                    <h3>Types of shows</h3>
                    <form>
                        <div>
                            <input type="checkbox" id="talkShow" name="talkShow" onChange={this.handleCheckbox}/>
                            <label htmlFor="talkShow">Talk Show</label>
                        </div>
                        <div>
                            <input type="checkbox" id="documentary" name="documentary" onChange={this.handleCheckbox}/>
                            <label htmlFor="documentary">Documentary</label>
                        </div>
                        <div>
                            <input type="checkbox" id="news" name="news" onChange={this.handleCheckbox}/>
                            <label htmlFor="news">News</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scripted" name="scripted" onChange={this.handleCheckbox}/>
                            <label htmlFor="scripted">Scripted</label>
                        </div>
                        <div>
                            <input type="checkbox" id="animation" name="animation" onChange={this.handleCheckbox}/>
                            <label htmlFor="animation">Animation</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reality" name="reality" onChange={this.handleCheckbox}/>
                            <label htmlFor="reality">Reality</label>
                        </div>
                    </form>
                </div>
                <button 
                    className={styles.button}
                    onClick={this.handleSaveButton}
                >
                    Save
                </button>
            </div>
        );
    }
}

export default Settings;