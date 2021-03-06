import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./ContactsForm.module.css";

class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    const data = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.props.onSubmit(data);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.contactsForm}>
        <label htmlFor={shortid.generate()} className={s.formLabel}>
          Name
        </label>
        <input
          className={s.formLabel}
          id={shortid.generate()}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={shortid.generate()} className={s.formLabel}>
          Number
        </label>
        <input
          className={s.formLabel}
          id={shortid.generate()}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
