import React from 'react';

import './TokenDisplay.css';

const TokenRow = ({ token }) => (
  <div className="col-sm-auto my-1">
    <div className={`card ${token.type}`}>
      <div className="card-body">
        <div className="token">
          {token.colour ? (
            <div className="colour">
              {token.colour.label}{' '}
              <div className="sample" style={{ background: token.colour.value }} />
            </div>
          ) : (
            <div className="value text-monospace">
              <strong>{token.value}</strong>
            </div>
          )}
          <div className="metadata">
            <small>
              {token.type}
              {token.col && ` (${token.col})`}
            </small>
          </div>
        </div>
        {token.tokens && <TokenDisplay tokens={token.tokens} />}
      </div>
    </div>
  </div>
);

const TokenDisplay = ({ tokens }) => (
  <div className="form-row my-n1">
    {tokens.map(
      token =>
        token.type !== 'WS' && (
          <TokenRow token={token} key={token.key || `${token.line}:${token.col}`} />
        )
    )}
  </div>
);

export default TokenDisplay;
