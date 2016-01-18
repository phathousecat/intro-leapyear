describe('leapYear', function() {
  it("is false for a year that is not divisble by 4, 100, or 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });
  it("is divisible by 4", function() {
  expect(leapYear(2004)).to.equal(true);
  });

});
