import React from 'react';
import PropTypes from 'prop-types';
import errorImage from '../../icons/cat.jpg';
import {
  StyledContact,
  StyledContactItem,
  StyledContactButton,
} from './ContactsList.styled.js';

const ContactsList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return <img src={errorImage} width="300" alt="error" />;
  } else {
    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <StyledContact key={id}>
            <StyledContactItem>
              {name}: {number}
            </StyledContactItem>
            <StyledContactButton
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </StyledContactButton>
          </StyledContact>
        ))}
      </ul>
    );
  }
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactsList;
