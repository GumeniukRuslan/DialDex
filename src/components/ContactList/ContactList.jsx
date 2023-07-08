import PropTypes from 'prop-types';
import { ContactNumber } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  if (!contacts.length) {
    return <p>No matches</p>
  }
  return(
    <ul>
      {contacts.map(contact => <li id={contact.id} key={contact.id}><div>{`${contact.name}:`}{<ContactNumber href={`tel:${contact.number}`}>{contact.number}</ContactNumber>}</div> <button onClick={deleteContact} type="button">Delete</button></li>)}
    </ul>
    
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
} 