/* Holds the Circle and Square classes */

class Circle {
  /**
   * Constructor to create a circle given the diameter of the circle
   * @param {Number} diameter The diameter of the circle to be created
   */
  constructor(diameter) {
    // Make sure that the diameter is valid
    if(this.isValidDiam(diameter)) {
      // Calculate the radius and area of the circle
      this.radius = 2 * diameter;
      this.area = Math.PI * Math.pow(this.radius, 2);
    }
    // Else, return an error message
    else {
      alert('The diameter passed in is not valid! Please enter a positive number!');
    }
  }

  /* Getter Functions */
  getArea() {
    return this.area;
  }

  getRadius() {
    return this.radius;
  }

  /**
   * Function to return the circle's information as a string
   */
  toString() {
    return "Circle: Radius = " + this.getRadius() + ", Area = " + this.getArea();
  }

  /* Validation Function */

  /**
   * Function to validate the diameter passed in
   * @param {Number} diameter The diameter passed in to create a circle
   */
  isValidDiam(diameter) {
    // Check to see that a null was not passed in
    if(diameter != null) {
      // Check to see if the diameter passed in is a number
      if(typeof diameter == 'number') {
        // Check to make sure that the diameter passed in is not a negative number
        if(diameter >= 0) {
          // Return true as the diameter is valid
          return true;
        }
      }
    } else {
      // Else, return false as the diameter is not valid
      return false;
    }
  }
}

class Square {
  /**
   * Constructor to create a sqaure given the length of one of the sides of the square
   * @param {Number} sideLength The length of one of the sides of the square to be created
   */
  constructor(sideLength) {
    // Make sure that the sideLength passed in is valid
    if(this.isValidSideLength(sideLength)) {
      // Calculate the size (perimeter) of the square and the area
      this.size = sideLength * 4;
      this.area = Math.pow(sideLength, 2);
    }
    // Else, return an error message
    else {
      alert('Side Length passed in is invalid! Please enter a positive number!');
    }
  }

  /* Getter Functions */
  getSize() {
    return this.size;
  }

  getArea() {
    return this.area;
  }

  /**
   * Function to return the square's information as a string
   */
  toString() {
    return "Square: Size = " + this.getSize() + ", Area = " + this.getArea();
  }

  /* Validation Function */

  /**
   * Function to validate the sideLength passed in
   * @param {Number} sideLength The sideLength passed in to create a square
   */
  isValidSideLength(sideLength) {
    // Check to see that a null was not passed in
    if(sideLength != null) {
      // Check to see if the sideLength passed in is a number
      if(typeof sideLength == 'number') {
        // Check to make sure that the sideLength passed in is not a negative number
        if(sideLength >= 0) {
          // Return true as the sideLength is valid
          return true;
        }
      }
    } else {
      // Else, return false as the sideLength is not valid
      return false;
    }
  }
}