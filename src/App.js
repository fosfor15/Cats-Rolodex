import { Component } from 'react';

import './App.css';
import logo from './logo.svg';


class App extends Component {
    constructor() {
        super();
        
        this.state = {
            name: 'Dmitry',
            company: 'Academy TOP'
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />
                    <p>
                        Hello, { this.state.name }!<br/>
                        I'm working at { this.state.company }.
                    </p>
                    <button
                        onClick={() => {
                            // Установка состояния и синхронное чтение
                            /* this.setState({ name: 'Superman' });
                            console.log('this.state :>> ', this.state); */
                            
                            // Установка состояния и асинхронное чтение
                            this.setState(
                                () => ({ name: 'Superman' }),
                                () => console.log('this.state :>> ', this.state)
                            );
                        }}
                    >
                        Change name
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
