import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    const newContact = { id: crypto.randomUUID(), ...contact };
    setContacts([...contacts, newContact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    try {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retriveContacts) {
        setContacts(retriveContacts);
      }
    } catch (error) {
      console.error("Failed to parse contacts from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } catch (error) {
      console.error("Failed to save contacts to localStorage", error);
    }
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <switch>
        <Routes>
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
        </switch>
      </Router>
    </div>
  );
}

export default App;
