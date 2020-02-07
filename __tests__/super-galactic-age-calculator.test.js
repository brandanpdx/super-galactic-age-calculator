import { ageCalc } from ".././src/super-galactic-age-calculator.js"; 

describe('ageCalc', () => {
  let userAge;
  beforeEach(() => {
    userAge = new ageCalc(20);
  });



  test("should determine if ageCalc object is instantiated correctly with user inputted age", () => {
    expect(userAge.age).toBe(20);
  })
})
