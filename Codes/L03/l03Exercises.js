for (let i =1; i<= 10; i++)
{
    if(i%2 == 1)
    {
        console.log(i);

    }
        
}





// creating an array lol 

//const myArr = ["I love RP",true];

//console.log(myArr[0]); // the index of i love rp is 0 so will print i love rp 

//console.log(myArr[1]); // the index of true is 1 so will print true 


const myArr1 = ["I love RP",true];

for (let j=0; j < myArr1.length; j++ )
{
    console.log(myArr1[j]);
}


var numStack = [];

numStack.push(2)

numStack.push(7)

numStack.pop();// remove last item 

numStack.shift(); // remove first item

numStack.unshift(3); // add to te front of the array

// numStack.splice read the  notes 

//functions

function multiplyTen(num)
{
    return num*10;
}

console.log("Answer is:" + multiplyTen(8))


const cars = ["saab","rolce royce"];

let car = cars[1];


console.log(car);