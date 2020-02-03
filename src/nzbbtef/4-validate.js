/**
  Helper function that counts the number of the given search term in the array specified
 */
const countInstancesInArray = (tokenTypes, search) =>
  tokenTypes.reduce((count, tokenType) => (tokenType.includes(search) ? (count += 1) : count), 0);

/**
  Helper function that compile the separators as a string separated by spaces.
 */
const getSeparatorsAsString = tokens =>
  tokens
    .filter(token => token.type.includes('Separator'))
    .map(separator => separator.type)
    .join(' ')
    .trim();

/**
  Helper function that compiles logic across validators (all must be true to be evaluated as true)
 */
const compileValidators = validators =>
  Object.values(validators).reduce((isValid, validator) => validator.validator && isValid, true);

/**
  Only 0 to 1 legSeparators permissible
 */
const validateLegSeparators = tokens =>
  countInstancesInArray(getSeparatorsAsString(tokens).split(' '), 'legSeparator') <= 1;

/**
  Only 0 to 1 partSeparators permissible per leg.
  Compiles the token types as a string, then does analysis between legSeparator and partSeparator.
 */
const validatePartSeparators = tokens =>
  getSeparatorsAsString(tokens)
    .split('legSeparator')
    .reduce(
      (isValid, separatorSubsetAsString) =>
        countInstancesInArray(separatorSubsetAsString.split(' '), 'partSeparator') <= 1 && isValid,
      true
    );

/**
  Validates that all tokens that should be have a colour, have a valid colour.
  Also needs to analyse child components (e.g. bandColour).
  Logic constructed based on whether a token is a colour token, and if it has children.
 */
const validateColours = tokens => {
  return tokens.reduce((isValid, token) => {
    const validators = Object.assign(
      {},
      token.tokenised && { areChildrenValid: { validator: validateColours(token.tokenised) } },
      token.isColourToken && { validColour: { validator: token.colour !== undefined } },
      { validPredecessors: { validator: isValid } }
    );

    return compileValidators(validators);
  }, true);
};

const validate = tokens => {
  const validators = {
    legSeparators: { label: 'Leg separators valid?', validator: validateLegSeparators(tokens) },
    partSeparators: { label: 'Part separators valid?', validator: validatePartSeparators(tokens) },
    colours: { label: 'Colours valid?', validator: validateColours(tokens) },
  };

  const isValid = compileValidators(validators);

  return {
    isValid: isValid,
    validators: validators,
  };
};

export default validate;
