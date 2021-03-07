import "./App.css";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/ContactsList";

import React, { Component } from "react";

class App extends Component {
  state = {};

  leaveFeedback = (e) => {
    this.setState((prevState) => ({}));
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Form />
      </>
    );
  }
}
export default App;
