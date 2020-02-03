import colourTransform from './1-colourTransform';
import tokenise from './2-tokenise';
import getColours from './3-getColours';
import validate from './4-validate';
import createStructure from './5-createStructure';

const nzbbtef = nzbbtef => {
  const tokens = getColours(tokenise(colourTransform(nzbbtef)));
  return (validate(tokens).isValid) ? createStructure(tokens) : undefined;
}

export default nzbbtef;
