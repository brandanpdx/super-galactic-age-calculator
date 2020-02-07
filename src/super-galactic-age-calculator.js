export class ageCalc {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  planets() {
    this.mercuryAge = parseFloat((this.age / this.mercury).toFixed(1));
    this.venusAge = parseFloat((this.age / this.venus).toFixed(1));
    this.marsAge = parseFloat((this.age / this.mars).toFixed(1));
    this.jupiterAge = parseFloat((this.age / this.jupiter).toFixed(1));
  }

}







