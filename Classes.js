// Function based object factory
function Details1(name, birthyear){
    this.name = name;
    this.yearOfBirth = birthyear;
    this.getDetails = () => {
        return "Name:" + this.name  + " and Age:" + (2021 - this.yearOfBirth);
    }

}

const person1 = new Details1('Prani', 1998);
console.log(person1.getDetails());

// class based object factory
class Details2{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    getDetails = () => {
        return `Name:${this.name} and Age:${2021 - this.year}`;
    }
}
const person2 = new Details2('Poorni',1998);
console.log(person2.getDetails());

//using extends
class Child extends Details2{
    constructor(name, year, exp, type, license){
        super(name, year);
        this.exp = exp;
        this.type = type;
        this.license = license;
    }
    getData = () => {
        console.log(`${this.getDetails()} Experience:${this.exp} Type:${this.type} License:${this.license}`);
    }
}
const person3 = new Child('Prani', 1998, 10, 'private', 'TN3454');
console.log(person3);
person3.getData();
const person4 = new Child('Poorni', 1998, 5, 'private', 'TN6774');
console.log(person4);
person4.getData();