import './Input.scss';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput(props) {
    return (
        <div className='input-container'>
            <input
            {...props}
            />
            <SearchIcon className='search-icon'/>
        </div>
    );
}

export default SearchInput;