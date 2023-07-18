import { Component } from 'react';
import Phonebook from './Phonebook';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import Filter from './Filter';


class App extends Component  {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    
  ],
  filter: '',
  }
  componentDidMount() {
    const localData = localStorage.getItem('contacts')
    if (localData) 
      this.setState({ contacts: JSON.parse(localData)})
    
}
   componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    
  }
  createUser = (data) => {
		const newUser = {
			id: nanoid(),
			...data,
		}
    
    this.state.contacts.forEach((contact) => {
      if( contact.name === newUser.name && contact.number === newUser.number)
      alert(`${contact.name} is already in your contacts`)
    })

    this.setState({contacts: this.state.contacts.filter(contact =>  contact.name !== newUser.name || contact.number !== newUser.number)})
    
    return this.setState((prevState) => ({
      contacts: [...prevState.contacts, newUser],
		})
    )}
  
 
  
  
    
filterOnChange = (value) => {
    
    this.setState({
      filter: value,
    })
      this.state.contacts.forEach((contact) => {
        if (contact.name.includes(value)) {
          console.log("filter")
     }
    })
          
   
  }

 
     deleteContact  = ({ target: { id } }) => {
       
        this.state.contacts.forEach((contact) => {
          if (contact.name === id) {
            this.setState({contacts: this.state.contacts.filter(item => item !== contact)})
     }
    })
   
  }
     getFilteredContacts =(contacts)=>contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook createUser={this.createUser} />
        <h2>Contacts</h2>
        <Filter
          
          value={filter}
          filterOnChange={this.filterOnChange}
          
          
        />
        < Contacts contacts={this.getFilteredContacts(this.state.contacts)}
                deleteContact={this.deleteContact}
          />
    </>
  );}
  
};
export default App;
