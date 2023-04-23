import Card from '../card/card.component';
import './card-list.styles.css';

import { Cat } from '../../containers/App';

interface CardListProps {
    cats: Array<Cat>;
}


const CardList = ({ cats }: CardListProps) => (
    <div className="card-list">
        { cats.length ?
            cats.map((cat: Cat) => 
                <Card
                    { ...cat }
                    key={ cat.id }
                />
            ) :
            <h2 className="white">
                There is no cats matching search field
            </h2>
        }
    </div>
);

export default CardList;
