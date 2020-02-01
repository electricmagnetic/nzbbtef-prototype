import * as moo from 'moo';

let symbolBandiser = moo.compile({
  symbol:         {match: /\S+\son\s/, value: value => value.match(/\S+/)[0]},
  symbolColour:   /^[a-zA-Z]+/,
  bandColour:     /[a-zA-Z]+$/,
  WS:             /[ \t]+/,
  error:          moo.error,
});

let idBandiser = moo.compile({
  bandColour:     /^[a-zA-Z]+/,
  inscription:    {match: /\(\S+\)/, value: value => value.match(/[^()]+/)[0]},
  error:          moo.error,
});

let tokeniser = moo.compile({
  symbolBand:     /\w+\s\S+\son\s\w+/,
  partSeparator:  /\/\//,
  bandSeparator:  /\//,
  legSeparator:   /-/,
  idBand:         /[a-zA-Z]*\(\S+\)/,
  colouredBand:   /[a-zA-Z]+/,
  WS:             /[ \t]+/,
  error:          moo.error,
});

/**
 Tokenise the string using `moo` as per the rules defined above, then further process certain types further.
 */
const tokenise = (nzbbtef) => {
  tokeniser.reset(nzbbtef);

  return Array.from(tokeniser).map((token) => {
    switch (token.type) {
      case 'symbolBand':
        symbolBandiser.reset(token.value);
        return Object.assign({}, token, { type: 'tokenisedSymbolBand' }, { tokenised: Array.from(symbolBandiser) });
      case 'idBand':
        idBandiser.reset(token.value);
        return Object.assign({}, token, { type: 'tokenisedIdBand' }, { tokenised: Array.from(idBandiser) });
      default:
        return token;
    }
  });
}

export default tokenise;
