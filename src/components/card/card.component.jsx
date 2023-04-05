import './card.component.css';

const Card = ({ id, name, email }) => (
    <div className="card">
        <img
            src={ `https://robohash.org/${ id + 10 }?set=set4&size=180x180` }
            alt={ `Cat ${ name }` }
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
