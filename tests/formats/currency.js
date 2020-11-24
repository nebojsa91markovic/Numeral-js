// Node
if (typeof module !== "undefined" && module.exports) {
  var numeral = require("../../numeral");
  var expect = require("chai").expect;
}

describe("Currency", function () {
  after(function () {
    numeral.reset();
  });

  it("should format to currency", function () {
    var tests = [
        [0, "RSD0.00", "RSD0.00"],
        [null, "RSD0.00", "RSD0.00"],
        [0.99, "RSD0,0.00", "RSD0.99"],
        [1000.234, "RSD0,0.00", "RSD1,000.23"],
        [1001, "RSD 0,0.[00]", "RSD 1,001"],
        [1000.234, "0,0.00 RSD", "1,000.23 RSD"],
        [-1000.234, "0,0.00 RSD", "-1,000.23 RSD"],
        [-1000.234, "(RSD0,0)", "(RSD1,000)"],
        [-1000.234, "(0,0RSD)", "(1,000RSD)"],
        [-1000.234, "(0,0 RSD)", "(1,000 RSD)"],
        [-1000.234, "RSD0.00", "-RSD1000.23"],
        [-1000.234, "RSD 0.00", "-RSD 1000.23"],
        [1230974, "(RSD0.00 a)", "RSD1.23 m"],
        [-1000.234, "RSD (0,0)", "RSD (1,000)"],
        [-1000.234, "RSD(0,0)", "RSD(1,000)"],
        [-1000.234, "RSD (0,0.00)", "RSD (1,000.23)"],
        [-1000.234, "RSD(0,0.00)", "RSD(1,000.23)"],
        [-1000.238, "RSD(0,0.00)", "RSD(1,000.24)"],
        [-1000.234, "RSD-0,0", "RSD-1,000"],
        [-1000.234, "RSD -0,0", "RSD -1,000"],
        [1000.234, "RSD (0,0)", "RSD 1,000"],
        [1000.234, "RSD(0,0)", "RSD1,000"],
        [1000.234, "RSD (0,0.00)", "RSD 1,000.23"],
        [1000.234, "RSD(0,0.00)", "RSD1,000.23"],
        [1000.238, "RSD(0,0.00)", "RSD1,000.24"],
        [1000.234, "RSD-0,0", "RSD1,000"],
        [1000.234, "RSD -0,0", "RSD 1,000"],
      ],
      i;

    for (i = 0; i < tests.length; i++) {
      expect(numeral(tests[i][0]).format(tests[i][1])).to.equal(tests[i][2]);
    }
  });

  it("should unformat to currency", function () {
    var tests = [
        ["RSD0.00", 0],
        ["RSD0.99", 0.99],
        ["RSD1,000.23", 1000.23],
        ["1,000.23 RSD", 1000.23],
        ["(RSD1,000)", -1000],
        ["-1,000RSD", -1000],
        ["RSD1.23 m", 1230000],
      ],
      i;

    for (i = 0; i < tests.length; i++) {
      expect(numeral(tests[i][0]).value()).to.equal(tests[i][1]);
    }
  });
});
