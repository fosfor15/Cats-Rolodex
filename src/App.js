import { Component } from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState(
                    () => ({ monsters: users }),
                    () => console.log('monsters :>> ', this.state.monsters)
                )
            });
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
