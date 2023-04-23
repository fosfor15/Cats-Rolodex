import { useEffect, lazy, ChangeEvent } from 'react';

import Header from '../components/header/Header';
import SearchBox from '../components/search-field/search-box.component';
import Scroll from '../components/scroll/scroll.component';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { requestCats, setSearchField } from '../state/actions';

const CardList = lazy(() => import('../components/card-list/card-list.component'));


export interface Cat {
    id: string;
    name: string;
    email: string;
}

interface requestCatsState {
    isPending: boolean;
    cats: Array<Cat>;
    error: Error | null;
}

interface searchCatsState {
    searchField: string;
}

interface State {
    requestCats: requestCatsState;
    searchCats: searchCatsState;
}


function App() {
    const isPending: boolean = useSelector((state: State) => state.requestCats.isPending);
    const cats: Array<Cat> = useSelector((state: State) => state.requestCats.cats);
    const error: Error | null = useSelector((state: State) => state.requestCats.error);
    const searchField: string = useSelector((state: State) => state.searchCats.searchField);

    const dispatch = useDispatch();

    useEffect(() => {
        // ToDo: решить задачу с аннотацией функции requestCats()
        // @ts-ignore
        dispatch(requestCats());
    }, [ dispatch ]);

    const handleSearchCat = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch(
            setSearchField(event.target.value.toLowerCase())
        );
    };

    const getFilteredCats = (): Array<Cat> => {
        return cats.filter((cat: Cat) =>
            cat.name.toLowerCase().includes(searchField)
        );
    };

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
