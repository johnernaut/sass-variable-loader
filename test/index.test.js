import { expect } from 'chai';
import getVariables from '../src/get-variables';
import parseVariables from '../src/parse-variables';

const sass = '$gray-base: #000 !default;\n$gray-darker: lighten($gray-base, 13.5%) !default; // #222\n$gray-dark: lighten($gray-base, 20%) !default;  // #333\n$gray:  lighten($gray-base, 33.5%) !default; // #555\n$gray-light:  lighten($gray-base, 46.7%) !default; // #777\n$gray-lighter:  lighten($gray-base, 93.5%) !default; // #eee';
const variables = getVariables(sass);

describe('getVariables()', function() {
  it('should return an array with 6 items', function() {
    expect(variables).to.be.a('array');
    expect(variables).to.have.length(6);
  });
});

describe('parseVariables()', function() {
  it('should return an object with the key grayBase', function() {
    const result = parseVariables(variables);
    expect(result).to.be.a('object');
    expect(result).to.include.keys('grayBase');
  });
});

describe('parseVariables({ preserveVariableNames: true })', function() {
  it('should return an object with the key gray-base', function() {
    const result = parseVariables(variables, { preserveVariableNames: true });
    expect(result).to.be.a('object');
    expect(result).to.include.keys('gray-base');
  });
});
