describe('playBottlesSong', function() {
  it("Returns correct line of song if number of bottles are zero", function() {
    expect(playBottlesSong(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });


});
