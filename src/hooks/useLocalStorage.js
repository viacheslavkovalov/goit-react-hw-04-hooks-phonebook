import { useState, useEffect } from 'react';

export default function useLocalStorage(key) {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(contacts));
  }, [key, contacts]);

  return [contacts, setContacts];
}
