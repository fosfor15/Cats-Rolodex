import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ cats }) => (
    <div className="card-list">
        { cats.map(cat => 
            <Card
                { ...cat }
                key={ cat.id }
            />
        ) }
    </div>
);

export default CardList;
