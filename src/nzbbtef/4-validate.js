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
  Only 0 to 1 legSeparators permissible
 */
const validateLegSeparators = tokens => {
  const separatorsAsString = getSeparatorsAsString(tokens);
  return countInstancesInArray(separatorsAsString.split(' '), 'legSeparator') <= 1;
};

/**
  Only 0 to 1 partSeparators permissible per leg.
  Compiles the token types as a string, then does analysis between legSeparator and partSeparator.
 */
const validatePartSeparators = tokens => {
  const separatorsAsString = getSeparatorsAsString(tokens);

  return separatorsAsString
    .split('legSeparator')
    .reduce(
      (isValid, separatorSubsetAsString) =>
        countInstancesInArray(separatorSubsetAsString.split(' '), 'partSeparator') <= 1 && isValid,
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
