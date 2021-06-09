//Eg1
const fname = 'Poorni';
const lname = 'Muralitharan';
const fullName = {
    Fname: fname,
    Lname: lname
}
console.log(fullName);

//Eg2
const greeting = "Hi Poorni, Do you remember me?";
const str = greeting.split(" ");
console.log(str);
const [G1,G2,G3,G4] = str;
console.log(G1);
console.log(G2);
console.log(G3);
console.log(G4);

//Eg3
const obj = {
    Name: 'Poorni',
    Age: '22',
    Designation: 'Trainee'
}
console.log(obj);
console.log(obj.Name);
const {Name, Designation} = obj;
console.log(Name);