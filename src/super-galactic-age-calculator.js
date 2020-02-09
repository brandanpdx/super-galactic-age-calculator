export class ageCalc {
  constructor(age, earthLifeExpectancy) {
    this.age = age;
    this.earthLifeExpectancy = earthLifeExpectancy;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  ageOnPlanets() {
    this.mercuryAge = parseFloat((this.age / this.mercury).toFixed(1));
    this.venusAge = parseFloat((this.age / this.venus).toFixed(1));
    this.marsAge = parseFloat((this.age / this.mars).toFixed(1));
    this.jupiterAge = parseFloat((this.age / this.jupiter).toFixed(1));
  }
  
  lifeExpectancy() {
    this.mercuryExpectancy = parseFloat((this.earthLifeExpectancy / this.mercury).toFixed(1));
    this.venusExpectancy = parseFloat((this.earthLifeExpectancy / this.venus).toFixed(1));
    this.marsExpectancy = parseFloat((this.earthLifeExpectancy / this.mars).toFixed(1));
    this.jupiterExpectancy = parseFloat((this.earthLifeExpectancy / this.jupiter).toFixed(1));
  }

  lifeRemaining() {
    this.earthRemaining = parseInt(this.earthLifeExpectancy - this.age);
    this.mercuryRemaining = parseInt(this.earthRemaining / this.mercury);
    this.venusRemaining = parseFloat((this.earthRemaining / this.venus).toFixed(1));
    this.marsRemaining = parseFloat((this.earthRemaining / this.mars).toFixed(1));
    this.jupiterRemaining = parseFloat((this.earthRemaining / this.jupiter).toFixed(1));
  }

  lifeSurpassed() {
    if (this.age > this.earthLifeExpectancy) {
      this.earthSurpassed = parseInt(this.age - this.earthLifeExpectancy);
      
    }


  }
}