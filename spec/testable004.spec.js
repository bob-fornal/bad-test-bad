var testableCode = {
  isDateAfterToday: (givenDate) => {
    var currentDate = new Date();
    return givenDate > currentDate;
  }
};

describe('Bad Test, Bad ... Testing against bad data', function() {

/* BAD PATTERN: Testing against bad data */
it('expects isDateAfterToday to return true', function() {
  var futureDate = new Date('2019-10-22');
  expect(testableCode.isDateAfterToday(futureDate))
    .toEqual(true);
});

/* BETTER PATTERN: Testing against bad data */
it('expects isDateAfterToday to return true', function() {
  var futureDate = new Date('3019-10-22');
  expect(testableCode.isDateAfterToday(futureDate))
    .toEqual(true);
});

/* BEST PATTERN: Testing against bad data */
it('expects isDateAfterToday to return true', function() {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  futureDate = new Date(tomorrow);
  expect(testableCode.isDateAfterToday(tomorrow))
    .toEqual(true);
});
    
});