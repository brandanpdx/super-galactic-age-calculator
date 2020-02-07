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
    let mercuryAge = parseFloat((userAge.age / userAge.mercury).toFixed(1));
    expect(mercuryAge).toEqual(83.3);
  })

  test("should determine age on Venus when age on Earth is 20 years old", () => {
    let venusAge = parseFloat((userAge.age / userAge.venus).toFixed(1));
    expect(venusAge).toEqual(32.3);
  })

  test("should determine age on Mars when age on Earth is 20 years old", () => {
    let marsAge = parseFloat((userAge.age / userAge.mars).toFixed(1));
    expect(marsAge).toEqual(10.6);
  })

  test("should determine age on Jupiter when age on Earth is 20 years old", () => {
    let jupiterAge = parseFloat((userAge.age / userAge.jupiter).toFixed(1));
    expect(jupiterAge).toEqual(1.7);
  }) 

})

