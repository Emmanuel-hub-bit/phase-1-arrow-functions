
const divide = (a, b) => {
    return a / b;
  };
  
  it("divide divides 2000 by 100", () => {
    let a = 2000;
    let b = 100;
    expect(divide(a, b)).to.equal(a / b);
  });

  function square(num) {
    return num * num;
  }

  function add(a, b) {
    return a + b;
  }