// specs code
describe("calculator", function () {

  it("sum method should be implemented", function () {
    expect(calculator.sum).toBeDefined();
  });

  it("sum method should sum values", function () {
    expect(calculator.sum(1, 2)).toEqual(3);
  });

});
