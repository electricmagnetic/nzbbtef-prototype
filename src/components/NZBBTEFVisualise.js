import React, { Component } from 'react';

import InputForm from './InputForm';

class NZBBTEFVisualise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nzbbtef: '',
    };

    this.handleNZBBTEFChange = this.handleNZBBTEFChange.bind(this);
  }

  handleNZBBTEFChange(nzbbtef) {
    this.setState({nzbbtef: nzbbtef});
  }

  render() {
    return (
      <div className="nzbbtef">
        <section className="my-5">
          <h2>1. Input</h2>
          <p>Enter a band combo in NZBBTEF format.</p>
          <InputForm
            onFieldChange={this.handleNZBBTEFChange}
            value={this.state.nzbbtef}
          />
        </section>
        <section className="my-5">
          <h2>2. Colour Transformation</h2>
          <em>TODO</em>
        </section>
        <section className="my-5">
          <h2>3. Tokenisation</h2>
          <em>TODO</em>
        </section>
        <section className="my-5">
          <h2>4. Colour Validation</h2>
          <em>TODO</em>
        </section>
        <section className="my-5">
          <h2>5. Separator Validation</h2>
          <em>TODO</em>
        </section>
        <section className="my-5">
          <h2>6. Structure Creation</h2>
          <em>TODO</em>
        </section>
      </div>
    );
  }
}

export default NZBBTEFVisualise;
