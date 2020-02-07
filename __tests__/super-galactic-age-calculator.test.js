import { ageCalc } from ".././src/super-galactic-age-calculator.js"; 

describe('ageCalc', () => {
  let userAge;
  beforeEach(() => {
    userAge = new ageCalc(20);
  });



  test("should determine if ageCalc object is instantiated correctly with user inputted age", () => {
    expect(userAge.age).toEqual(20);
  })

  test("should determine age on Mercury if age on Earth is 20 years old", () => {
    let mercuryAge = (userAge * mercury);
    expect(mercuryAge).toEqual(83.3);
  })
})