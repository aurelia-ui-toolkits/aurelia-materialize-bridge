// import './setup';
import 'aurelia-polyfills';
import {getBooleanFromAttributeValue} from 'src/common/attributes';

describe('Attributes', () => {
  describe('getBooleanFromAttributeValue', () => {
    it('returns true on true', () => {
      let value = true;
      let result = getBooleanFromAttributeValue(value);
      expect(result).toBe(true);
    });

    it('returns true on "true"', () => {
      let value = 'true';
      let result = getBooleanFromAttributeValue(value);
      expect(result).toBe(true);
    });

    it('returns false on false', () => {
      let value = false;
      let result = getBooleanFromAttributeValue(value);
      expect(result).toBe(false);
    });

    it('returns false on "false"', () => {
      let value = 'false';
      let result = getBooleanFromAttributeValue(value);
      expect(result).toBe(false);
    });
  });
});
