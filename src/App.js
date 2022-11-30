import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchName: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleSearchChange = (event) => {
        const searchName = event.target.value.toLowerCase();
        this.setState({ searchName });
    }

    render() {
        const { handleSearchChange } = this;
        const { monsters, searchName } = this.state;

        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchName));
        
        return (
            <div className="App">
                <input
                    type="search"
                    className="search-field"
                    placeholder="Search for monsters"
                    onChange={ handleSearchChange }
                />
                <CardList monsters={ filteredMonsters } />
            </div>
        );
    }
}

export default App;
