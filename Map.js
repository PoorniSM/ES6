//Eg1 - Object
const users = [
    { username: 'poorni20', password: '1234' },
    { username: 'priya23', password: '5678' },
    { username: 'prani15', password: '9876' },
    { username: 'nila20', password: '3456' },
  ];

const usernames = users.map(data => data.username);
console.log(usernames);

//Eg2
const number = [3, 4, 5, 6, 7, 8];
const newNum = [];

//Without Map
function doubleNum(num1){
     return num1*2;
}
for( let i=0;i<number.length;i++ ){
  newNum.push(doubleNum( number[i] ));
} 
console.log(newNum);

//With Map
const mapNum = newNum.map((num) => {return num*2});
console.log(mapNum);

//Eg3
const Details = [
   {
     Name: 'Prani',
     Lang: 'Tamil'
   },
   {
     Name: 'Poorni',
     Lang: 'Telugu'
   }
]
console.log(Details);
const detMap = Details.map((data) => {
  console.log(data)
  return{
     Name: data.Name,
     Lang: data.Lang
   }
});
console.log(detMap);

