import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {

  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    description: PropTypes.string,
    done: PropTypes.bool,
    handleChange: PropTypes.func
  };

  constructor() {
    super();

    this.setupHandlers();
  }

  setupHandlers() {
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange() {
    const updatedObject = Object.assign(
      {},
      {
        id: this.props.id,
        description: this.props.description,
        done: !this.props.done
      }
    );

    this.props.toggle(this)
  }

  render() {
    return(
      <label htmlFor={this.props.id }>
        <input
          checked={this.props.done ? 'checked' : ''}
          id={this.props.id}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        {this.props.description}
      </label>
    );
  }
}
