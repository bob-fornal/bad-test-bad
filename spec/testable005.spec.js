var testableCode = {
  getString: function(a, b, len) {
    return (a + b).substr(0, len);
  },
  getShortName: function(first, last) {
    return testableCode.getString(last + ", ", first, 10);
  }
};

describe('Bad Test, Bad ... Testing the mock', function() {

  describe('expects getString to return', function() {
    it('a + b at len', function() {
      var a = "abc";
      var b = "def";
      var len = 4;
  
      expect(testableCode.getString(a, b, len)).toEqual("abcd");
    });
  });
  
  describe('expects getShortName to return', function() {
    it('a name truncated to 10 characters', function() {
      expect(testableCode.getShortName("Bob4567890", "Last"))
        .toEqual("Last, Bob4");
    });
  });
    
});