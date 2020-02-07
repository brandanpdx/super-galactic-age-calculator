import { ageCalc } from ".././src/super-galactic-age-calculator.js"; 

describe('ageCalc', () => {
  let userAge;

  beforeEach(() => {
    userAge = new ageCalc(20);
  });

  test("should determine if ageCalc object is instantiated correctly with user inputted age", () => {
    expect(userAge.age).toEqual(20);
  })

  test("should determine age on Mercury when age on Earth is 20 years old", () => {
    let mercuryAge = parseFloat((userAge.age / userAge.mercury).toFixed(2));
    expect(mercuryAge).toEqual(83.33);
  })
})

// parseFloat((userAge.age / planets.mercury).toFixed(2));