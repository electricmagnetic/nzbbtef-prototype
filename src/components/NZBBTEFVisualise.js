import React, { Component } from 'react';

import InputForm from './InputForm';
import TokenDisplay from './TokenDisplay';
import ValidatorDisplay from './ValidatorDisplay';

import colourTransform from '../nzbbtef/1-colourTransform';
import tokenise from '../nzbbtef/2-tokenise';
import getColours from '../nzbbtef/3-getColours';
import validate from '../nzbbtef/4-validate';

class NZBBTEFVisualise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nzbbtef: '',
    };

    this.handleNZBBTEFChange = this.handleNZBBTEFChange.bind(this);
  }

  handleNZBBTEFChange(nzbbtef) {
    this.setState({ nzbbtef: nzbbtef });
  }

  render() {
    const one = colourTransform(this.state.nzbbtef);
    const two = tokenise(one);
    const three = getColours(two);
    const four = validate(three);

    return (
      <div className="nzbbtef">
        <section className="sticky-top mb-5 py-3 bg-light">
          <div className="container">
            <InputForm onFieldChange={this.handleNZBBTEFChange} value={this.state.nzbbtef} />
          </div>
        </section>
        <div className="container">
          <section className="my-5">
            <h2>1. Colour Transformation</h2>
            <p>
              The first step is to convert long colour names into short colour names.
              <br />
              This is so that colours with one words (e.g. Dark Green) can be appropriately
              processed.
            </p>
            <div className="row">
              <div className="col-md-9 mb-3">
                <div className="card">
                  <div className="card-body">
                    {one ? <samp>{one}</samp> : <span>No input specified</span>}
                  </div>
                </div>
              </div>
              <div className="col-md-3 small">
                <ol>
                  <li>Colours can be written as one or one words (Pale Blue or PaleBlue)</li>
                  <li>Colour names are case insensitive</li>
                  <li>
                    Colour names will not feature elsewhere (e.g. as symbols or as inscriptions)
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section className="my-5">
            <h2>2. Tokenisation</h2>
            <p>
              The second step is to recognise the constituent parts in order to figure out the
              structure of the band combo.
            </p>
            <div className="row">
              <div className="col-md-9 mb-3">
                <div className="card">
                  <div className="card-body">
                    {two && two.length > 0 ? (
                      <TokenDisplay tokens={two} />
                    ) : (
                      <span>No input specified</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-3 small">
                <ol>
                  <li>ID bands without a colour will be designated as 'M' (metal)</li>
                </ol>
              </div>
            </div>
          </section>
          <section className="my-5">
            <h2>3. Get Colours</h2>
            <p>Match up the 'short colour' values with the corresponding CSS value.</p>
            <div className="row">
              <div className="col-md-9 mb-3">
                <div className="card">
                  <div className="card-body">
                    {three && three.length > 0 ? (
                      <TokenDisplay tokens={three} />
                    ) : (
                      <span>No input specified</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-3 small">
                <ol>
                  <li>
                    As colours have been standardised to 'short colours', simple lookups can be done
                    to get CSS values
                  </li>
                  <li>Invalid colours will not return a colour value</li>
                </ol>
              </div>
            </div>
          </section>
          <section className="my-5">
            <h2>4. Validation</h2>
            <p>Run validations across entire band combo.</p>
            <div className="row">
              <div className="col-md-9 mb-3">
                <div className="card">
                  <div className="card-body">
                    {four && <ValidatorDisplay validators={four.validators} />}
                  </div>
                </div>
              </div>
              <div className="col-md-3 small"></div>
            </div>
          </section>
          <section className="my-5">
            <h2>5. Structure Creation</h2>
            <em>TODO</em>
          </section>
        </div>
      </div>
    );
  }
}

export default NZBBTEFVisualise;
