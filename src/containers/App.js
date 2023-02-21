import { useState, useEffect } from 'react';

import './App.css';

import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import CardList from '../components/card-list/card-list.component';


function App() {
    const [ searchField, setSearchField ] = useState('');
    const [ monsters, setMonsters ] = useState([]);
    const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField));
        
            setFilteredMonsters(newFilteredMonsters);
    }, [ monsters, searchField ]);

    const handleSearchChange = (event) => {
        const newSearchField = event.target.value.toLowerCase();
        setSearchField(newSearchField);
    };

    return (
        <div className="App">
            <h1 className="app-title">
                Monsters Rolodex
            </h1>

            <SearchBox
                className="monsters-search-box"
                placeholder="Search for monsters"
                onChangeHandler={ handleSearchChange }
            />
            
            <Scroll>
                <CardList monsters={ filteredMonsters } />
            </Scroll>
        </div>
    );
}

export default App;
