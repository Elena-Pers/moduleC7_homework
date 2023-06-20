const sum = require('../index.js');

describe ('test sum', () =>{
  it ('adds 1 + 3 to equal 4', () => {
    const result = sum (1, 3)
    expect(result).toBe(4);
  }),
  it ('adds 1 + 5 to equal 6', () => {
    const result = sum (1, 5)
    expect(result).toBe(6);
  });
});
