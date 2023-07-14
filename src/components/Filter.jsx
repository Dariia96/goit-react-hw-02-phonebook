import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const Filter = ({ value, filterOnChange }) => {
   /* if(value !==``) {filterOnChange = (value) => {
        contactsList.map((Item) => {
            if (Item.name.toLowerCase().includes(value)) {
                <li className={css.contactItem}>
                <span>{name} : {number}</span>
                <button className={css.deleteButton}type='button' id={name} onClick={deleteContact}>Delete</button>
           </li>
            }
          
         })
    }}
    */
    
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
    filterOnChange: PropTypes.func.isRequired
  
};

export default Filter;
