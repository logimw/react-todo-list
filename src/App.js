import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoRow from './TodoRow';
import TodoCreator from './TodoCreator';
import VisibilityControl from './VisibilityControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Adam',
      todoItems: [
        { action: 'Kupić kwiaty', done: false },
        { action: 'Wziąć buty', done: false },
        { action: 'Zebrać bilety', done: true },
        { action: 'Zadzwonić do Jurka', done: false },
      ],
      showCompleted: true,
    };
  }

  updateNewTextValue = (e) => {
    this.setState({ newItemText: e.target.value });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }],
        },
        () => localStorage.setItem('todos', JSON.stringify(this.state))
      );
    }
  };

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Adam' ? 'Jakub' : 'Adam',
    });
  };

  toggleToDo = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  todoTableRows = (doneValue) =>
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow key={item.action} item={item} callback={this.toggleToDo} />
      ));

  componentDidMount = () => {
    let data = localStorage.getItem('todos');
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: 'Adam',
            todoItems: [
              { action: 'Kupić kwiaty', done: false },
              { action: 'Wziąć buty', done: false },
              { action: 'Zebrać bilety', done: true },
              { action: 'Zadzwonić do Jurka', done: false },
            ],
            showCompleted: true,
          }
    );
  };
  render() {
    return (
      <div>
        <TodoBanner
          userName={this.state.userName}
          tasks={this.state.todoItems}
        />
        <div className="container-fluid">
          <TodoCreator callback={this.createNewTodo} />
        </div>
        <button className="btn btn-primary m-2" onClick={this.changeStateData}>
          Zmień
        </button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Opis</th>
              <th>Wykonane</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="wykonane zadania"
            isChecked={this.state.showCompleted}
            callback={(checked) => this.setState({ showCompleted: checked })}
          />
        </div>
        {this.state.showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Opis</th>
                <th>Wykonane</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows(true)}</tbody>
          </table>
        )}
      </div>
    );
  }
}

export default App;
