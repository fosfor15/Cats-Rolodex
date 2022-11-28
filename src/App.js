import { Component } from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
                {
                    name: 'Frank',
                    id: 1
                },
                {
                    name: 'Mal',
                    id: 2
                },
                {
                    name: 'Jacky',
                    id: 3
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                { this.state.monsters.map(monster => {
                    return (
                        <div key={ monster.id }>
                            <h2>{ monster.name }</h2>
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default App;
