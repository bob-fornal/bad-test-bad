var testableCode = {
  strings: [],
  getString: function() {
    if (testableCode.strings.length === 0) {
      return "";
    }
    return testableCode.strings.pop();
  },
  setString: function(value) {
    testableCode.push(value);
  }
};

describe('Bad Test, Bad ... Testing Too Much', function() {

  beforeEach(function() {
    testableCode.strings = [];
  });

  describe('it expects getString to return', function() {
    it('an empty string', function() {
      testableCode.strings = [];
      expect(testableCode.getString()).toEqual("");
    });
  
    it('the "last" value', function() {
      testableCode.strings = ["Dan", "Bob"];
      expect(testableCode.getString()).toEqual("Bob");
    });
  
    it('an empty string after all other values are removed', function() {
      testableCode.strings = ["Bob"];
      testableCode.getString(); // removes "Bob"
      expect(testableCode.getString()).toEqual("");
    });
  });

});
