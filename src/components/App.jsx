import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';

import ContactList from './ContactList';
import Filter from './Filter';
import CreateContact from './CreateContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== index),
    }));
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <CreateContact onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />

        <GlobalStyle />
      </div>
    );
  }
}
