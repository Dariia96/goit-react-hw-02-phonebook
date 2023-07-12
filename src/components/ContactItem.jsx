
import PropTypes from 'prop-types';
import css from './Phonebook.module.css'

const ContactItem = ({ name, number, deleteContact }) => {
    return <li className={css.contactItem}>
        <span>{name} : {number}</span>
        <button className={css.deleteButton}type='button' id={name} onClick={ deleteContact}>Delete</button>
</li>

};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}
export default ContactItem;