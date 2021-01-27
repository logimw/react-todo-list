import React, { Component } from 'react';

class TodoBanner extends Component {
  render = () => (
    <h4 className="bg-primary text-white text-center p-2">
      Lista zadań {this.props.userName}:{' '}
      {this.props.tasks.filter((t) => !t.done).length}
    </h4>
  );
}

export default TodoBanner;
