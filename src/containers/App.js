import { useState, useEffect } from 'react';

import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import CardList from '../components/card-list/card-list.component';
import './App.css';

import { connect } from 'react-redux';
import { setSearchField } from '../state/actions';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchChange: event => dispatch(
            setSearchField(event.target.value.toLowerCase())
        )
    };
};


function App(props) {
    const { searchField, handleSearchChange } = props;
    
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
