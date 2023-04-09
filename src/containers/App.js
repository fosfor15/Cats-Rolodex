import { useEffect, lazy } from 'react';

import Header from '../components/header/Header';
import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { requestCats, setSearchField } from '../state/actions';

const CardList = lazy(() => import('../components/card-list/card-list.component'));


function App() {
    const isPending = useSelector(state => state.requestCats.isPending);
    const cats = useSelector(state => state.requestCats.cats);
    const error = useSelector(state => state.requestCats.error);
    const searchField = useSelector(state => state.searchCats.searchField);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCats());
    }, [ dispatch ]);

    const handleSearchCat = (event) => dispatch(
        setSearchField(event.target.value.toLowerCase())
    );

    const getFilteredCats = () => 
        cats.filter(cat => cat.name.toLowerCase().includes(searchField));

    return (
        <div className="App">
            <Header />

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
                <h2 className="white">{ error.message }</h2>
            }
        </div>
    );
}

export default App;
