import './card.component.css';

import { Cat } from '../../containers/App';

interface CardProps extends Cat {}


const Card = ({ id, name, email }: CardProps) => (
    <div className="card">
        <img
            src={ `https://robohash.org/${ id + 10 }?set=set4&size=140x140` }
            alt={ `Cat ${ name }` }
            width="140"
            height="140"
        />
        <h2 className="cat-name">
            { name }
        </h2>
        <a
            className="cat-email"
            href={ `mailto:${ email }` }
            onClick={ event => {
                event.preventDefault();
                alert(`Email to ${ name }`);
            } }
        >
            { email }
        </a>
    </div>
);

export default Card;
