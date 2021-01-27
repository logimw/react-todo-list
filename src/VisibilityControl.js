import React, { Component } from 'react';

class VisibilityControl extends Component {
  render() {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={this.props.isChecked}
          onChange={(event) => this.props.callback(event.target.checked)}
        />
        <label className="form-check-label">
          Pokaż {this.props.description}
        </label>
      </div>
    );
  }
}

export default VisibilityControl;
