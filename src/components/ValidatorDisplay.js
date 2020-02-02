import React from 'react';

const ValidatorRow = ({ validator }) => (
  <div className="col-sm-auto my-1">
    <div className="card">
      <div className="card-body">
        <span className="mr-2">{validator.label}</span>
        {validator.validator ? (
          <span className="badge badge-pill badge-success">Yes</span>
        ) : (
          <span className="badge badge-pill badge-danger">No</span>
        )}
      </div>
    </div>
  </div>
);

const ValidatorDisplay = ({ validators }) => (
  <div className="form-row my-n1">
    {Object.entries(validators).map(([key, validator]) => (
      <ValidatorRow key={key} validator={validator} />
    ))}
  </div>
);

export default ValidatorDisplay;
