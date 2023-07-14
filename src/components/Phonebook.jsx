import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css'


class Phonebook extends Component {
    state = {
        name: '',
        number: '',
    }
    handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		})
    }
    handleSubmit = (e) => {
        e.preventDefault()
		const data = {
			...this.state,
		}
		

		this.props.createUser(data)
		this.setState({
		name: '',
		number: '',
	    })
       
	}
    render() {
        const { name, number} = this.state
		return (<section className={css.formWraper}>
			<form onSubmit={this.handleSubmit}>
				<div className='mb-3'>
                    <label htmlFor='name' className={css.formLabel}>
					  Name
					</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
						value={name}
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='number'
						className={css.formLabel}
					>
						Number
					</label>
					<input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
						value={number}
                    />
				</div>
                <button
                    type ='submit'
                    className={css.btn}
					disabled={!name || !number}
				>
				Add contact
				</button>
            </form>
            
            </section>
		)
    }
}
 
Phonebook.propTypes = {
    createUser : PropTypes.func.isRequired
}

export default Phonebook;