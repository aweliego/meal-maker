const menu = {
  // This property will ultimately contain a mapping between each course and the dishes available to order in that course.
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

// Add a new dish to the appropriate array in the menu's _courses object, based on what coursName was passed in
// Each dish is added with a name and price properties
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },

// Generate a random dish (random index) from the course (array) we pass in:
// This method will be used inside generateRandomMeal() where we will pass in the argument/course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length); // guarantees that the random number will be between 0 and the length of the array
    return dishes[randomIndex];
  },

// Generate the 3-course meal:
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Appetizer: ${appetizer.name}\n Main: ${main.name}\n Dessert: ${dessert.name}\n Total price: ${totalPrice}`;
  },

  /* How come we can access the name and price properties on the variables:
  
Price can be called as a property of appetizer / main / dessert

appetizer / main / dessert are variables defined in generateRandomMeal()

These variables are the result of calling getRandomDishFromCourse(courseName)

getRandomDishFromCourse(courseName) returns a random dish from each of the _courses

Each of the dishes in the courses array are added to the array with a name and price properties when we call addDishToCourse */


  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizer (appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  get mains () {
    return this._courses.mains;
  },
  set mains (mainsIn) {
    this._courses.mains = mainsIn; 
  },
  get desserts () {
    return this._courses.desserts;
  },
  set desserts (dessertIn) {
    this._courses.desserts = dessertIn;
  },

  get courses () {
    return {
      appetizers: this.appetizers, // this uses the appetizer getter method that returns the array of appetizers
      mains: this.mains,
      desserts: this.desserts    
    };
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.5);
menu.addDishToCourse('appetizers', 'Ceviche', 8);
menu.addDishToCourse('appetizers', 'Pea Soup', 6.5);
menu.addDishToCourse('mains', 'Entrecote', 18.8);
menu.addDishToCourse('mains', 'Sea bass', 20.5);
menu.addDishToCourse('mains', 'Risotto', 13);
menu.addDishToCourse('desserts', 'Tiramisu', 7);
menu.addDishToCourse('desserts', 'Cheese Plate', 12.5);
menu.addDishToCourse('desserts', 'Ice Cream', 5);

const meal = menu.generateRandomMeal();
console.log(meal);


/*Using getters and setters*/

// Not working, throws error: TypeError: Cannot read property 'price' of undefined


const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName] = dish;
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length); 
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Appetizer: ${appetizer.name}\n Main: ${main.name}\n Dessert: ${dessert.name}\n Total price: ${totalPrice}`;
  },

  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts    
    };
  },
  get appetizers () {
    return this._appetizers;
  },
  set appetizers (appetizer) {
    this._appetizers.push(appetizer);
  },
  get mains () {
    return this._mains;
  },
  set mains (main) {
    this._mains.push(main);
  },
  get desserts () {
    return this._desserts;
  },
  set desserts (dessert) {
    this._desserts.push(dessert);
  }
};

//menu.dessert = 'cake';
//console.log(menu._desserts);

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.5);
menu.addDishToCourse('appetizers', 'Ceviche', 8);
menu.addDishToCourse('appetizers', 'Pea Soup', 6.5);
menu.addDishToCourse('mains', 'Entrecote', 18.8);
menu.addDishToCourse('mains', 'Sea bass', 20.5);
menu.addDishToCourse('mains', 'Risotto', 13);
menu.addDishToCourse('desserts', 'Tiramisu', 7);
menu.addDishToCourse('desserts', 'Cheese Plate', 12.5);
menu.addDishToCourse('desserts', 'Ice Cream', 5);

const meal = menu.generateRandomMeal();
console.log(meal);