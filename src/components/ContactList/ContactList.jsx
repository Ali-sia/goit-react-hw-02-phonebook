import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}, {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
