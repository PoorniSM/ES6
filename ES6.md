#JAVASCRIPT-ES6
---
---
###History
1.JS (1996) ==> ECMAScript1 (1997)
2.ECMAScript2 (1998)
3.ECMAScript3 (1999)
4.ECMAScript4 (2000)
5.ECMAScript5 (2009) - (2012) => IE
6.ECMAScript6 (2015)
7.ECMAScript (2016,2017,2018 and 2019)
***
###Babel
1.Preprocessor for JS/ECMAScript.
2.To convert ES6+ code into backward compatible version of JS that can be run by older browser
***
###Var,let and const
####Var
1.Declaring a variable
2.Re-initialized and Re-declared
3.Not recommended
4.hoisting
####Let
1.To change the value later in code
2.Block scope
3.Can be re-initialized,No re-declaration
4.No hoisting
####Const
1.Constant variable which cannot be changed throughout the code
2.Block scope
3.Neither re-initialized nor re-declared
4.No hoisting
***
###Template Literals
1.String literals allows embedded expressions
2.Multi-line strings and string interpolation features
3.Template strings
4.Enclosed by backtick(``) instead of a single or double quotes
5.Placeholders(\${exp})
***
###Default Arguments
1.Set default value to function parameter/argument if no value or undefined of is passed
2.Def value will only be used when no parameter is passed
***
###Destructuring
1.It allows us to 'unpack' arrays or objcts into a bunch of variables which makes working with arrays and objects a bit more convenient
***
###Arrow Functions
1.Syntactically compact alternative to a regular function expression without its own binding to 'this', 'super'
***
###Array and Object Destructuring
1.To unpack values from arrays or properties from an object
Eg:
####Object
```
var user = {
        name : 'Deepak',
        username : 'dipakkr',
        password : 12345
    }

    const {name, username, password} = user;
    console.log(name);
    console.log(username);
    console.log(password);
```
####Array
```
const fruits = ["apple", "mango", "banana", "grapes"];

    const [fruit1, fruit2, fruit3] = fruits;

    console.log(fruit1); 
    console.log(fruit2); 
    console.log(fruit3); 
```
***
###Map,Reduce and Filter
1.Array methods
2.These methods applied on an array, it returns a new array based on the given parameter
3.####Reduce - 
1.Passes the result of the callback from one iteration to the nxt one
2. This callback is accumulator - (int,str,obj or even array) and must be instantiated and passed when calling reduce()
3.reduces the array to single value, executes provided func for each value from left to rgt, Result stored in an accumulator
4.####Filter -
1.Iterates through array to create a new array
2.Can decide which element should be added in new array based on conditions
3.If return true - allows, false - no data,to add/skip the current item
***
###Iterables and Looping
1.List of iterables - Array,Map,String,Sets,Arguments
2.(for...of) to access iterables - creates a loop iterating over iterable objects
***
###Rest and Spread operator
1.Denoted by (...)
####Rest parameter
1.Collects all remaining elements into an array
2.Can collect any no. of arguments
3.Last argument
####Spread Operator
1.Allows array/obj/string to be expanded into single arguments/ele in case of array or key-value pairs in case of object.
2.Is opp of rest parameter
3.In rest,we were collecting the list of args into array, while with spread we unpack the array elements
4.Can copy one array to other and can concatenate an array to another array
***
###Object Literals
1.To create obj in JS.
2.Can be initialized by directly using the variable name
3.ES5 require function statement, but no need in ES6,can directly return statement
4.Key in ES6 can be dynamic, Any Express can be used to create a key
***
###Promises
1.to support asynchoronos programming, JS uses callback
2.Callback implementation => Major problem(eg: callbacks inside callback - looks messy and not readable) => Callback hell
3.So, Promises introduced, used to handle async operations, it defers the execution of code block until request is completed, so that other operations can run without interruption
4.Simplifies asynchronous programming by making code look sync and avoid prob associated with callbacks
####Three states
1.Pending - initial state
2.Fulfilled - completed successfully
3.Rejected - failed
####Syntax
```
const promise = new Promise((resolve,reject) => {
//promise body
//call resolve() - complete
//call reject() - failed
})
```
####then() and catch() methods
1.then() - Called when resolve() is executed, receives data passed in resolve() as arguments
2.catch() - Called when reject() is executed
***
###Classes 
1.Support prototype-based inheritance, Constructor, Super calls, Instance and static methods
####Syntax
```
class ClassName{
  constructor(){
    //Initialize the properties here
  }
  //Methods outside constructor
  method1 = () =>{
  //Method body
  }
} 
```
####Classes
1.Class Declaration
2.Class Expression
#####Declaration
1.use class keyword followed by className
2.The class name must start with Capital letter
3.not hoisted
#####Expression
1.Class expressions can be named or unnamed. 
2.The name given to a named class expression is local to the class's body.
3.not hoisted
####Constructor
1.For creating and initializing an object created with a class
2.Only one constructor for a class
3.Can use super keyword to call constructor of super class
####Static
1.Members called without instantiating their class and cannot be called through a class instance
2.To create utility functions for an app
3.useful for caches, Fixed-config, or any other data that has not to be replicated across instance
####Binding this with Prototype and static methods
1.this will be undefined inside method, if called without a value for this(assigning the method to a var and then calling it)
2.code within class body's syntactic boundary is always executed in strict mode
####Inheritance(Sub classing with extends)
#####Syntax
```
class ChildClass{
//class body
}
class childClass extends ParentClass{
//class body
}
```
1.extends - to create a class as a child of another class
2.If constructor in subclass, it needs to call super() before using 'this'
3.Can extend traditional function-based classes
4.For similar methods, child's method takes precedence over parent's method
5.Classes cannot extend regular(non-construtor) objects
6.To inherit from regular obj, Use Object.setPrototypeOf()
***
###Array.find()
1.find() - returns the value of first array element that passes a test function
2.function can take 3 arguments - item value,item index,array itself
###Array.findIndex()
1.findIndex() - returns th index of the first array elements that passes the test function
***
###New Math methods
1.Math.trunc(x) - returns integerpart of x
2.Math.sign(x) - returns -1,null(0),1
3.Math.cbrt(x) -  eturn the cube root of x
4.Math.log2(x) - returns the base 2 logarithm of x
5.Math.log10(x) - returns the base 10 logarithm of x
***
###New Number Properties
1.EPSILON 
2.MIN_SAFE_INTEGER
3.MAX_SAFE_INTEGER
###New Number Methods
1.Number.isInteger() - returns true if argument is an integer
2.Number.isSafeInteger() - returns if the argument is a safe integer(represented as double precision number)
safe integers  from -((2^53) - 1) to +((2^53) - 1)
###New Global Methods
1.isFinite() - returns false if argument is Infinity or NaN
2.isNaN() - returns true if the argument is NaN
