import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFieldChange(event.target.value);
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <label htmlFor="nzbbtef">Band Combo (NZBBTEF)</label>
          <input
            className="form-control"
            id="nzbbtef"
            type="text"
            name="nzbbtef"
            value={this.props.value}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default InputForm;
