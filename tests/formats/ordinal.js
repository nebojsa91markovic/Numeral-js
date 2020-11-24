// Node
if (typeof module !== "undefined" && module.exports) {
  var numeral = require("../../numeral");
  var expect = require("chai").expect;
}

describe("Ordinal", function () {
  after(function () {
    numeral.reset();
  });

  it("should format to an ordinal", function () {
    var tests = [
        [1, "0o", "1."],
        [52, "0 o", "52."],
        [23, "0o", "23."],
        [100, "0o", "100."],
        [1234, "0,0o", "1,234."],
      ],
      i,
      n,
      output;

    for (i = 0; i < tests.length; i++) {
      n = numeral(tests[i][0]);
      output = n.format(tests[i][1]);

      expect(output).to.equal(tests[i][2]);

      expect(typeof output).to.equal("string");
    }
  });

  it("should unformat to an ordinal", function () {
    var tests = [
        ["1.", 1],
        ["52.", 52],
        ["23.", 23],
        ["100.", 100],
        ["1,234.", 1234],
      ],
      i;

    for (i = 0; i < tests.length; i++) {
      expect(numeral(tests[i][0]).value()).to.equal(tests[i][1]);
    }
  });
});
