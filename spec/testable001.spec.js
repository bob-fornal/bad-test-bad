var testableCode = {
  user: {},
  getUserRating: function() {
    return testableCode.user.rating;
  },
  getUserScore: function() {
    return testableCode.user.score;
  }
};

describe('Bad Test, Bad ... Reader In The Test', function() {

  beforeEach(function() {
    testableCode.user = {};
  });

  it('expects user rating to be returned', function() {
    testableCode.user = {
      username: 'Bob',
      rating: 100,
      score: 1.1
    };
  
    var result = testableCode.getUserRating('Bob');
    expect(result).toEqual(100);
  });
  
  it('expects user score to be returned', function() {
    testableCode.user = {
      username: 'Bob',
      rating: 100,
      score: 1.1
    };
  
    var result = testableCode.getUserScore('Bob');
    expect(result).toEqual(1.1);
  });

});
