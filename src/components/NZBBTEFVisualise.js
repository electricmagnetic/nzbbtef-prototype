import React, { Component } from 'react';

import InputForm from './InputForm';
import TokenTable from './TokenDisplay';

import colourTransform from '../nzbbtef/1-colourTransform';
import tokenise from '../nzbbtef/2-tokenise';
import getColours from '../nzbbtef/3-getColours';

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
    const one = colourTransform(this.state.nzbbtef);
    const two = tokenise(one);
    const three = getColours(two);

    return (
      <div className="nzbbtef">
        <section className="my-5">
          <h2>Input</h2>
          <p>Enter a band combo in NZBBTEF format.</p>
          <InputForm
            onFieldChange={this.handleNZBBTEFChange}
            value={this.state.nzbbtef}
          />
        </section>
        <section className="my-5">
          <h2>1. Colour Transformation</h2>
          <p>
            The first step is to convert long colour names into short colour names.<br />
            This is so that colours with one words (e.g. Dark Green) can be appropriately processed.
          </p>
          <div className="row">
            <div className="col-md-8 mb-3">
              <div className="card">
                <div className="card-body">
                  {one
                    ? <samp>{one}</samp>
                    : <span>No input specified</span>
                  }
                </div>
              </div>
            </div>
            <div className="col-md-4 small">
              <ol>
                <li>Colours can be written as one or one words (Pale Blue or PaleBlue)</li>
                <li>Colour names are case insensitive</li>
                <li>Colour names will not feature elsewhere (e.g. as symbols or as inscriptions)</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h2>2. Tokenisation</h2>
          <p>
            The second step is to recognise the constituent parts in order to
            figure out the structure of the band combo.
          </p>
          <div className="row">
            <div className="col-md-8 mb-3">
              <div className="card">
                <div className="card-body">
                  {two && two.length > 0 ? (
                    <TokenTable tokens={two} />
                  ) : (
                    <span>No input specified</span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 small">
              <ol>
                <li>
                  ID bands without a colour will be designated as 'M' (metal)
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h2>3. Get Colours</h2>
          <p>
            Match up the 'short colour' values with the corresponding CSS value.
          </p>
          <div className="row">
            <div className="col-md-8 mb-3">
              <div className="card">
                <div className="card-body">
                  {three && three.length > 0 ? (
                    <TokenTable tokens={three} />
                  ) : (
                    <span>No input specified</span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 small">
              <ol>
                <li>
                  As colours have been standardised to 'short colours', simple
                  lookups can be done to get CSS values
                </li>
                <li>Invalid colours will not return a colour value</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h2>4. Validation</h2>
          <em>TODO: validate colours, validate band structure</em>
        </section>
        <section className="my-5">
          <h2>5. Structure Creation</h2>
          <em>TODO</em>
        </section>
      </div>
    );
  }
}

export default NZBBTEFVisualise;
