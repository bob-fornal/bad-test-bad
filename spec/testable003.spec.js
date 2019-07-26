var testableCode = {
  getString: function(a, b, len) {
    return (a + b).substr(0, len);
  }
};

describe('Bad Test, Bad ... Duplication of logic', function() {

  it('expects getString to return a + b at len', function() {
    var a = "abc";
    var b = "def";
    var len = 4;
  
    expect(testableCode.getString(a, b, len)).toEqual("abcd");
  });
  
});
