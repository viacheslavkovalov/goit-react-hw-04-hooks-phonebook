import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import {
  Container,
  Section,
  ContactsList,
  Filter,
  Form,
  Modal,
  IconButton,
} from './components';
import useLocalStorage from './hooks/useLocalStorage';
import { ReactComponent as AddIcon } from './icons/add.svg';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    } else if (contacts.find(contact => contact.number === number)) {
      toast.error(`${number} is already used`, {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    } else {
      setContacts(contacts => [...contacts, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <ToastContainer />
      <IconButton onClick={toggleModal} aria-label="Добавить Contact">
        <AddIcon fill="white" width="30" height="30" />
      </IconButton>
      <Section title="Phonebook">
        {showModal && (
          <Modal onClose={toggleModal}>
            <Form onSubmit={addContact}></Form>
          </Modal>
        )}
      </Section>
      <Section title="Contacts">
        {contacts.length > 1 && (
          <Filter value={filter} onChange={changeFilter} />
        )}
        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        ></ContactsList>
      </Section>
    </Container>
  );
}
