import React, { Component } from 'react';

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: '' };
  }
  updateNewTextValue = (e) => {
    this.setState({ newItemText: e.target.value });
  };
  createNewTodo = () => {
    this.props.callback(this.state.newItemText);
    this.setState({ newItem: '' });
  };
  render() {
    return (
      <div className="my-1">
        <input
          type="text"
          className="form-control"
          value={this.state.nextItemText}
          onChange={this.updateNewTextValue}
        />
        <button className="btn btn primary mt-1" onClick={this.createNewTodo}>
          Dodaj
        </button>
      </div>
    );
  }
}

export default TodoCreator;
