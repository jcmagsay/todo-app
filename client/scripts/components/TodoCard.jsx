import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Textfield from 'components/textfield';
import styles from 'styles/components/card';

export default class TodoCard extends Component {

  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    done: PropTypes.bool,
    description: PropTypes.string,
    handleChange: PropTypes.func
  };

  constructor() {
    super();

    this.state = {
      isEditing: false,
      error: false,
      value: ''
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  handleEdit(item) {
    this.setState({ isEditing: true });
  }

  handleRemove() {
    this.props.delete(this.props.id)
  }

  handleSave() {
    this.setState({ isEditing: false });
    this.props.update(this, this.state.value);
  }

  textChanged(val) {
    this.setState({ value: val });
  }

  _renderEditView() {
    return(
      <div className="{styles.actions}">
        <Textfield
          id={`card-textfield-${this.props.id}`}
          error={this.state.error}
          label="Update Description"
          type="text"
          textChanged={this.textChanged}
          value={this.state.value}
        />
        <button className={styles.button} onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }

  _renderDefaultActions() {
    return(
      <div className="{styles.actions}">
        <button className={styles.button} onClick={this.handleRemove}>
          Remove
        </button>
        <button className={styles.button} onClick={this.handleEdit}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    return(
      <div className={styles.base}>
        <h2 className={styles.title}>
          {this.state.isEditing ? 'Editing: ' : ''}
          {this.props.description}
        </h2>
        <p className={styles.supportingText}>
          Status: {this.props.done ? 'Complete': 'Incomplete'}
        </p>
        {this.props.children}
        {(this.state.isEditing) ? this._renderEditView() : this._renderDefaultActions()}
      </div>
    );
  }
}
