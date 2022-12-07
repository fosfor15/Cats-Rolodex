import './card.component.css';

const Card = ({ id, name, email }) => (
    <div className="card">
        <img
            src={ `https://robohash.org/${ id + 10 }?set=set2&size=180x180` }
            alt={ `Monster ${ name }` }
        />
        <h2 className="monster-name">
            { name }
        </h2>
        <a
            className="monster-email"
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
