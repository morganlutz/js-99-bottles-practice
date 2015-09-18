describe('playBottlesSong', function() {
  it("Returns correct line of song if number of bottles are zero", function() {
    expect(playBottlesSong(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });

  it("Returns correct line of song if number of bottles is only one", function() {
    expect(playBottlesSong(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.");
  });


});
