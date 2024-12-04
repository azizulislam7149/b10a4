function calculateTax(income, expenses) {
    if( income < expenses){
        return 'invalid input'
     }
     if(income <= 0 || expenses <= 0 ||income === -1|| expenses===-1){
        return 'invalid input';
     }
  const monthlyCost =income -expenses;
 const incomeTax = monthlyCost * 0.2;
 return incomeTax;
}
// zihad.ph sent you an email from gmail.com

function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    // const [username, domain] = email.split('@');
    const emailSplit = email.split('@');
    const username = emailSplit[0];
    const  domain = emailSplit[1];

    if (!username || !domain) {
        return "Invalid Email";
    }
    return `${username} sent you an email from ${domain}`;
    // const result = `${userName} sent you an email from ${domainName}`;
    // console.log(result,'all');
}
const showEmail = 'nadim.naem5@outlook.com'

const output= sendNotification(showEmail)


function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return 'invalid input'
    }

    let nameArr = name.split('');
    for(let char of nameArr){
        if(!isNaN(char)){
            return true
        }
       
    }
    return false;
}
   const str = 'e1mu3'
   const isBoolean = checkDigitsInName(str)
   console.log(isBoolean);

   function calculateFinalScore(info){
    if(typeof info != 'object'|| Array.isArray(info)){
        return 'invalid object'
    }
    let totalMarks =info.testScore + info.schoolGrade;
    if(info.isFFamily){
        totalMarks = totalMarks +20;
       
    }
return totalMarks>= 80? true :false
   


}
const student ={
     name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false   
}

const admission = calculateFinalScore(student);
console.log(admission ,'going on next ti me nnnnnnnnnnnn');
  
function  waitingTime(waitingTimes  , serialNumber) {
    // You have to write your code here
}
function  waitingTime(waitingTimes  , serialNumber) {
    // You have to write your code here
}

function  waitingTime(waitingTimes  , serialNumber) {
    // You have to write your code here
}
function  waitingTime(waitingTimes  , serialNumber) {
    // You have to write your code here
}

function  waitingTime(waitingTimes  , serialNumber) {
if(!Array.isArray(waitingTimes) || typeof serialNumber !=='number')
    return 'invalid imput'

let sum = 0;
for(let time of waitingTimes){
    sum = sum +time;
}
let average = Math.round(sum/waitingTimes.length)
let personLeft = serialNumber -1 - waitingTimes.length;
let waitingTime = average * personLeft;
return waitingTime;
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10

))
