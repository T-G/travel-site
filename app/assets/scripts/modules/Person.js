class Person {
    constructor(fName, favColor){
        this.fullName = fName;
        this.favouriteColor = favColor;
    }

    greet() {
        console.log("Hello "+this.fullName + " your favourite color is "+this.favouriteColor);
    }

}

export default Person;