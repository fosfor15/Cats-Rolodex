import { memo } from 'react';

const Header = memo(() => {
    return (
        <h1 className="app-title">
            Cats Rolodex
        </h1>
    );
});

export default Header;
