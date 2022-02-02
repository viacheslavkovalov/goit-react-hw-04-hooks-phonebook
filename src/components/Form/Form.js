import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormWrapper,
  SubmitButton,
  StyledInput,
  StyledLabel,
} from './Form.styled';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const disabled = true;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledLabel htmfor={nameInputId}>
        Name
        <StyledInput
          required
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          id={nameInputId}
        />
      </StyledLabel>
      <StyledLabel htmfor={numberInputId}>
        Number
        <StyledInput
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          id={numberInputId}
          required
        />
      </StyledLabel>
      {name && number ? (
        <SubmitButton type="submit" disabled={!disabled}>
          Add contact
        </SubmitButton>
      ) : (
        <SubmitButton type="submit" disabled>
          Add contact
        </SubmitButton>
      )}
    </FormWrapper>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
