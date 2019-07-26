var testableCode = {
  getRejectedPromise: function() {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
          reject('fail');
      }, 1000);
    });
  }
};

describe('Bad Test, Bad ... False positives', function() {

  /* BAD PATTERN: False positive */
  it('expect the code inside setTimeout to be ignored', function(){
    setTimeout(function() {
      expect(true).toEqual(false);
    }, 1000);
  });

  /* BAD PATTERN: False positive */
  it('test with no expect will always pass', function(){
    const hello = 'World';
    const life = 42;
  });

  /* GOOD PATTERN: Handling Asynchronous Behavior */
  it('expect the code inside setTimeout to run', function(done){
    setTimeout(function() {
      expect(true).toEqual(false);
      done();
    }, 1000);
  });

  /* GOOD PATTERN: Include expect */
  it('test with an expect can pass or fail', function(){
    const hello = 'World';
    const life = 42;
    expect(true).toEqual(false);
  });  

  /* BAD PATTERN: False positive */
  it('expects rejection to occur (should pass)', function() {
    testableCode.getRejectedPromise().then(function(result) {
      expect(result).toEqual('fail');
    });
  });

  /* GOOD PATTERN: Handling Asynchronous Behavior */
  it('expects rejection to occur (should follow catch)', function(done) {
    testableCode.getRejectedPromise()
      .then(function(result) {
        expect(result).toEqual('pass');
        done();
      })
      .catch(function(result) {
        expect(result).toEqual('fail');
        done();
      });
  });

});