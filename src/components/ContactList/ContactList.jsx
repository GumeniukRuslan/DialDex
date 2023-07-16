import PropTypes from 'prop-types';
import { ContactNumber, DelBtn, DelIcon, StyledContact } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  if (!contacts.length) {
    return <p>No matches</p>
  }
  return(
    <ul>
      {contacts.map(contact => <li id={contact.id} key={contact.id}><StyledContact>{`${contact.name}:`}{<ContactNumber href={`tel:${contact.number}`}>{contact.number}</ContactNumber>}</StyledContact> <DelBtn onClick={deleteContact} type="button"><DelIcon/></DelBtn></li>)}
    </ul>
    
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
} 