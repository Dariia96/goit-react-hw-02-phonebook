import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const Filter = ({ value, filterOnChange}) => {
   
    
    return <div className= {css.filterWraper}>
        <label className={ css.filterLabel} htmlFor="filter"> Find contacts by name</label>
        <input
            type="text"
            id="filter"
            name='filter'
            value={value}
            onChange={(e)=>(filterOnChange(e.target.value))}
        />
        
    </div>
    
}

    ;
Filter.propTypes= {
    value: PropTypes.string.isRequired,
  
};

export default Filter;
