import React from 'react';

import './TokenDisplay.css';

const TokenRow = ({ token }) => (
  <div className="col-sm-auto my-2" key={`${token.line}:${token.col}`}>
    <div className={`card ${token.type}`}>
      <div className="card-body">
        <div className="token">
          <div className="value"><strong>{token.value}</strong></div>
          {token.colour
            ? <div className="colour">{token.colour}</div>
            : <div className="metadata"><small>{token.type} ({token.col})</small></div>
          }
        </div>
        {token.tokenised && <TokenTable tokens={token.tokenised} />}
      </div>
    </div>
  </div>
)

const TokenTable = ({ tokens }) => (
  <div className="form-row my-n2">
    {tokens.map(token =>
      token.type !== 'WS' && <TokenRow token={token} key={`${token.line}:${token.col}`} />
    )}
  </div>
);

export { TokenRow, TokenTable };
