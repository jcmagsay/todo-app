import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Textfield from 'components/textfield';

export default class TodoList extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;
    e.preventDefault();
    this.props.textChanged(val);
  }

  render() {
    return(
      <fieldset>
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleChange}
        />
        <span className={!this.props.error ? 'utilities__hidden': ''}>Error: can't be blank</span>
      </fieldset>
    );
  }
}
