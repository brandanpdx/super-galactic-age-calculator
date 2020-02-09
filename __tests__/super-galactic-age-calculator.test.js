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
    userAge.ageOnPlanets();
    expect(userAge.mercuryAge).toEqual(83.3);
  })

  test("should determine age on Venus when age on Earth is 20 years old", () => {
    userAge.ageOnPlanets();
    expect(userAge.venusAge).toEqual(32.3);
  })

  test("should determine age on Mars when age on Earth is 20 years old", () => {
    userAge.ageOnPlanets();
    expect(userAge.marsAge).toEqual(10.6);
  })

  test("should determine age on Jupiter when age on Earth is 20 years old", () => {
    userAge.ageOnPlanets();
    expect(userAge.jupiterAge).toEqual(1.7);
  }) 

  test("should determine life expectancy on Mercury, assuming an 80 year life expectancy on Earth", () => { 
    userAge.lifeExpectancy();
    expect(userAge.mercuryExpectancy).toEqual(333.3);
  })

  test("should determine life expectancy on Venus, assuming an 80 year life expectancy on Earth", () => { 
    userAge.lifeExpectancy();
    expect(userAge.venusExpectancy).toEqual(129);
    })

  test("should determine life expectancy on Mars, assuming an 80 year life expectancy on Earth", () => { 
    userAge.lifeExpectancy();
    expect(userAge.marsExpectancy).toEqual(42.6);
    })

  test("should determine life expectancy on Jupiter, assuming an 80 year life expectancy on Earth", () => { 
    userAge.lifeExpectancy();
    expect(userAge.jupiterExpectancy).toEqual(6.7);
    })

  test("should determine remaining life expectancy on Earth, when Earth age is 20 years old", () => {
    userAge.remainingLifespan();
    expect(userAge.earthRemaining).toEqual(60);
    console.log(userAge.earthRemaining);
    })

  test("should determine remaining life expectancy on Mercury, when age on Earth is 20 years old", () => {
    userAge.remainingLifespan();
    expect(userAge.mercuryRemaining).toEqual(250);
    })

  test("should determine remaining life expectancy on Venus, when age on Earth is 20 years old", () => {
    userAge.remainingLifespan();
    expect(userAge.venusRemaining).toEqual(97);
    })

})


