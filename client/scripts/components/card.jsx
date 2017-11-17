import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/components/card';

export default class Card extends Component {

  static propTypes = {
    id: PropTypes.number,
    done: PropTypes.bool,
    description: PropTypes.string,
    handleChange: PropTypes.func
  };

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.delete(this.props.id)
  }

  render() {
    return(
      <div className={styles.base}>
        <h2 className={styles.title}>
          {this.props.description}
        </h2>
        <p className={styles.supportingText}>
          Status: {this.props.done ? 'Complete': 'Incomplete'}
        </p>
        {this.props.children}
        <div className="{styles.actions}">
          <button className={styles.button} onClick={this.handleClick}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}
