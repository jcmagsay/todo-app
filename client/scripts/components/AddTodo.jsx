import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value) return;
    this.props.add(this.state.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <p>Use the form below to add a new Todo item</p>
        <fieldset>
          <label htmlFor="new-todo">Description</label>
          <input
            id="new-todo"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span>Error: can't be blank</span>
        </fieldset>
        <div>
          <button>
            Add
          </button>
        </div>
      </form>
    );
  }
}
