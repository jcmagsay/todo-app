import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Textfield from 'components/textfield';
import styles from 'styles/components/textfield';

export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      focused: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;
    e.preventDefault();
    this.props.textChanged(val);
  }

  handleFocus(e) {
    this.setState({ focused: true });
  }

  handleBlur(e) {
    this.setState({ focused: false });
  }

  render() {
    const focusClass = !this.state.focused ? styles.base : `${styles.base} ${styles.base}--focused`;
    return(
      <fieldset className={focusClass}>
        <input
          id={this.props.id}
          className={styles.input}
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label
          className={styles.label}
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
        <span className={!this.props.error ? `${styles.error} utilities__hidden`: styles.error}>Error: can't be blank</span>
      </fieldset>
    );
  }
}
