import { Component } from 'react';
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
            .then(users => {
                this.setState(
                    () => ({ monsters: users }),
                    () => console.log('monsters :>> ', this.state.monsters)
                )
            });
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

                { filteredMonsters.map(monster => {
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
