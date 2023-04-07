import { useEffect } from 'react';

import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import CardList from '../components/card-list/card-list.component';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { requestCats, setSearchField } from '../state/actions';


function App() {
    const isPending = useSelector(state => state.requestCats.isPending);
    const cats = useSelector(state => state.requestCats.cats);
    const error = useSelector(state => state.requestCats.error);
    const searchField = useSelector(state => state.searchCats.searchField);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCats());
    }, []);

    const handleSearchCat = (event) => dispatch(
        setSearchField(event.target.value.toLowerCase())
    );

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

export default App;
