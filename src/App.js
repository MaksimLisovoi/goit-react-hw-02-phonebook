import "./App.css";
import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  formSubmitHandler = (data) => {
    const { contacts } = this.state;
    if (
      contacts.some((el) => el.name.toLowerCase() === data.name.toLowerCase())
    ) {
      return alert(`${data.name} is already in contacts`);
    }

    // const newContact = this.state.contacts.concat(data);
    // console.log(newContact);

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));

    console.log(data);
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    console.log(this.state.contacts);
    const { filter } = this.state;

    const filteredContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
export default App;
