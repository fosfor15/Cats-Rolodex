import { useState, useEffect } from 'react';

import './App.css';

import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import CardList from '../components/card-list/card-list.component';


function App() {
    const [ searchField, setSearchField ] = useState('');
    const [ cats, setCats ] = useState([]);
    const [ filteredCats, setFilteredCats ] = useState(cats);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setCats(users));
    }, []);

    useEffect(() => {
        const newFilteredCats = cats.filter(cat => 
            cat.name.toLowerCase().includes(searchField));
        
            setFilteredCats(newFilteredCats);
    }, [ cats, searchField ]);

    const handleSearchChange = event => {
        const newSearchField = event.target.value.toLowerCase();
        setSearchField(newSearchField);
    };

    return (
        <div className="App">
            <h1 className="app-title">
                Cats Rolodex
            </h1>

            <SearchBox
                className="cats-search-box"
                placeholder="Search for cats"
                onChangeHandler={ handleSearchChange }
            />
            
            <Scroll>
                <CardList cats={ filteredCats } />
            </Scroll>
        </div>
    );
}

export default App;
