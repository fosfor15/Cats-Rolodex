import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ cats }) => (
    <div className="card-list">
        { cats.length ?
            cats.map(cat => 
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
