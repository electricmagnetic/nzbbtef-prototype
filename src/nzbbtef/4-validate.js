/**
  Helper function that counts the number of the given search term in the array specified
  Input: array, search term
  Output: number
 */
const countInstancesInArray = (tokenTypes, search) =>
  tokenTypes.reduce((count, tokenType) => (tokenType.includes(search) ? (count += 1) : count), 0);

/**
  Helper function that compiles token types into a string that match a given search term
  Input: tokens, search term
  Output: string
 */
const compileTokenTypes = (tokens, search) =>
  tokens
    .reduce(
      (combined, token) =>
        token.type.includes(search) ? [combined, token.type].join(' ') : combined,
      ''
    )
    .trim();

/**
  Only 0 to 1 legSeparators permissible
 */
const validateLegSeparators = tokens => {
  const compiledLegSeparators = compileTokenTypes(tokens, 'Separator');
  const legSeparatorCount = countInstancesInArray(compiledLegSeparators.split(' '), 'legSeparator');

  return legSeparatorCount <= 1;
};

/**
  Only 0 to 1 partSeparators permissible per leg
 */
const validatePartSeparators = tokens => {
  const compiledSeparatorsByLeg = compileTokenTypes(tokens, 'Separator').split('legSeparator');

  return compiledSeparatorsByLeg.reduce(
    (isValid, compiledSeparators) =>
      countInstancesInArray(compiledSeparators.split(' '), 'partSeparator') <= 1 && isValid,
    true
  );
};
const validate = tokens => {
  const validators = {
    legSeparators: { label: 'Leg separators valid?', validator: validateLegSeparators(tokens) },
    partSeparators: { label: 'Part separators valid?', validator: validatePartSeparators(tokens) },

  // Check validity across all validations
  const isValid = Object.values(validators).reduce(
    (accumulator, validator) => validator.validator && accumulator,
    true
  );

  return {
    isValid: isValid,
    validators: validators,
  };
};

export default validate;
