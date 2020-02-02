import React from 'react';

import './TokenDisplay.css';

const TokenRow = ({ token }) => (
  <div className="col-sm-auto my-1" key={`${token.line}:${token.col}`}>
    <div className={`card ${token.type}`}>
      <div className="card-body">
        <div className="token">
          {token.colour
            ? <div className="colour">{token.colour.label} <div className="sample" style={{background: token.colour.value}}/></div>
            : <div className="value text-monospace"><strong>{token.value}</strong></div>
          }
          <div className="metadata"><small>{token.type} ({token.col})</small></div>
        </div>
        {token.tokenised && <TokenTable tokens={token.tokenised} />}
      </div>
    </div>
  </div>
)

const TokenTable = ({ tokens }) => (
  <div className="form-row my-n1">
    {tokens.map(token =>
      token.type !== 'WS' && <TokenRow token={token} key={`${token.line}:${token.col}`} />
    )}
  </div>
);

export default TokenTable;
