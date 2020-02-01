import React, { Component } from 'react';

import InputForm from './InputForm';
import TokenTable from './TokenDisplay';

import colourTransform from '../nzbbtef/1-colourTransform';
import tokenise from '../nzbbtef/2-tokenise';

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
    const two = colourTransform(this.state.nzbbtef);
    const three = tokenise(two);

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
          <p>
            The first step is to convert long colour names into short colour names.<br />
            This is so that colours with two words (e.g. Dark Green) can be appropriately processed.
          </p>
          <div className="row">
            <div className="col-md-8 mb-3">
              <div className="card">
                <div className="card-body">
                  {two
                    ? <samp>{two}</samp>
                    : <span>No input specified</span>
                  }
                </div>
              </div>
            </div>
            <div className="col-md-4 small">
              <ol>
                <li>Colours can be written as one or two words (Pale Blue or PaleBlue)</li>
                <li>Colour names are case insensitive</li>
                <li>Colour names will not feature elsewhere (e.g. as symbols or as inscriptions)</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h2>3. Tokenisation</h2>
          <p>
            The second step is to recognise the constituent parts in order to figure out the
            structure of the band combo.
          </p>
          <div className="row">
            <div className="col-md-8 mb-3">
              <div className="card">
                <div className="card-body">
                  {three && three.length > 0
                    ? <TokenTable tokens={ three } />
                    : <span>No input specified</span>
                  }
                </div>
              </div>
            </div>
            <div className="col-md-4">

            </div>
          </div>
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
