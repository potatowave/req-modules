

module.exports = {

  dogs: 1,
  cats: 1,

  // for every dog you gain, it eats a cat.

  dogAdder : function dogAdder() {

     this.dogs++;

    //console.log("dogAdder dogs" + this.dogs);
    //console.log("dogAdder cats" + this.cats);

  },

  // cats don't eat dogs.

  catAdder : function catAdder() {
    this.cats++;
    console.log("catAdder cats" + this.cats);
  }

}

