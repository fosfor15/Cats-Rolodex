import { useEffect } from 'react';

import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import CardList from '../components/card-list/card-list.component';
import './App.css';

import { connect } from 'react-redux';
import { requestCats, setSearchField } from '../state/actions';


const mapStateToProps = (state) => {
    return {
        isPending: state.requestCats.isPending,
        cats: state.requestCats.cats,
        error: state.requestCats.error,
        searchField: state.searchCats.searchField
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleRequestCats: () => {
            dispatch(requestCats())
        },
        handleSearchCat: event => dispatch(
            setSearchField(event.target.value.toLowerCase())
        )
    };
};


function App(props) {
    const {
        isPending,
        cats,
        error,
        handleRequestCats,
        searchField,
        handleSearchCat
    } = props;

    useEffect(handleRequestCats, []);

    const getFilteredCats = () => 
        cats.filter(cat => cat.name.toLowerCase().includes(searchField));

    return (
        <div className="App">
            <h1 className="app-title">
                Cats Rolodex
            </h1>

            { isPending ?
                <h2 className="white">Loading...</h2> :
            !error ?
                <>
                    <SearchBox
                        className="cats-search-box"
                        placeholder="Search for cats"
                        onChangeHandler={ handleSearchCat }
                    />

                    <Scroll>
                        <CardList cats={ getFilteredCats() } />
                    </Scroll>
                </> :
                <p className="white">{ error }</p>
            }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
