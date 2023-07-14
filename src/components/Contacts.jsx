import ContactItem from "./ContactItem";
import PropTypes from 'prop-types';
import css from './Phonebook.module.css'
import { nanoid } from 'nanoid';

const Contacts = ({ contacts, deleteContact, filter }) => {
    if (!filter) {
        return <ul className={css.contacts}>
    
            {contacts.map((contact) => {
                return <ContactItem
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    deleteContact={deleteContact}
                />
            })}
        </ul>
    }
    contacts.map((contactFilter) => {
       
        if (contactFilter.name.toLowerCase().includes(filter)) {
            console.log(contactFilter)
            return <ul className={css.contacts}>
                <ContactItem
                    key={nanoid()}
                    name={contactFilter.name}
                    number={contactFilter.number}
                    deleteContact={deleteContact}
                />
            </ul>
            
         }})
        
            
        }
    

;
Contacts.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape({name : PropTypes.string.isRequired, number: PropTypes.string.isRequired}).isRequired).isRequired,
    deleteContact: PropTypes.func.isRequired,
}
export default Contacts;