import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Textfield from 'components/textfield';

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value) {
      this.setState({ error: true });
    } else {
      this.props.add(this.state.value);
      this.setState({
        value: '',
        error: false
      });
    }
  }

  textChanged(val) {
    this.setState({ value: val });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <p>Use the form below to add a new Todo item</p>
        <Textfield
          id="new-todo"
          error={this.state.error}
          label="Todo Description"
          type="text"
          textChanged={this.textChanged}
          value={this.state.value}
        />
        <button>Add</button>
      </form>
    );
  }
}
