import './search-box.styles.css';

interface SearchBoxParams {
    className: string;
    placeholder?: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxParams) => (
    <input
        type="search"
        className={ `search-box ${className}` }
        placeholder={ placeholder }
        onChange={ onChangeHandler }
    />
);

SearchBox.defaultProps = {
    placeholder: ''
};

export default SearchBox;
