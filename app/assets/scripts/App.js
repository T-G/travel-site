var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
    payTax(){
        let taxAmt = 0;
        console.log(this.fullName + " owes ££" + taxAmt + " in taxes.");
    }
}

var jane = new Adult("Jane", "Orange");
var jimmy = new Person("Jimmy", "Blue");

jane.greet();
jane.payTax();
jimmy.greet();

//$("h1").remove();