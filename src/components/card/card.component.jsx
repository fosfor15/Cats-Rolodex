import { Component } from 'react';

import './card.component.css';

class Card extends Component {
    render() {
        const { id, name, email } = this.props;

        return (
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
    }
}

export default Card;
