
class Restaurant {

  constructor (props) {
      this.name = props.name
      this.address = props.address
      this.hourOpen = props.hourOpen
      this.hourClosed = props.hourClosed
      this.combo = []
      this.megacombo = []
      this.menu = {
          small_pizza: null,
          large_pizza: null,
          soda: null,
          salad: null,
          breadsticks: null
      }
  }

  set combobo (val) {
    val.forEach(food => {
      this.combo.push(food);
     });
  }
  
  get kombobo () {
    return this.combo.reduce((a, b) => {
      return a+b;
    },0)
    }
  
}


let rest = {
  name: "Wow",
  address: "the moon",
  hourOpen: "10:00am",
  hourClosed: "10:00pm",
  menu: {
    small_pizza: 10,
    large_pizza: 15,
    soda: 3,
    salad: 9,
    breadsticks: 9
  }
}

let wows = new Restaurant(rest);


wows.combobo = [23, 32, 12]


// wows.supercombos =  [combo1 ={
//   small_pizza: 34,
//   soda: 34
// }, combo2 = {
//   large_pizza: 32,
//   salad: 32
// }]

console.log(wows.kombobo)