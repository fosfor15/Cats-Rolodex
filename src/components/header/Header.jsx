import { memo } from 'react';

const Header = memo(() => {
    console.log('Header render');
    return (
        <h1 className="app-title">
            Cats Rolodex
        </h1>
    );
});

export default Header;
