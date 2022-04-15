// // //Ask user for input
const n1 = prompt("Enter a number:");
const n2 = prompt("Enter a number:");
// Validate the input
const num1 = Number(n1);
const num2 = Number(n2);

//Test
// console.log(num1,num2)


//Document write below the table if valid 

if (num1 > 0 && num2 > 0 && num1 < num2) {
    document.write('<center><h3>Multiple of 5 squared or if not is multiplied by 5</h3>');
    document.write(`<center><h3>starting at ${num1} and ending with ${num2}</h3>`);
    document.write('<center><h3>displayed in the table above</h3>');
//Document write if inputs invalid
} else {
    document.write('<font color = \"red\"><center><h3>Please enter a valid input!</h3></font color = \"red\">');
    document.write(`<font color = \"red\"><center><h3>You entered ${n1} and ${n2}.</h3></font color = \"red\">`);
    document.write('<font color = \"red\"><center><h3>Click Refresh to Start Again</h3></font color = \"red\">');
}

//Function for table Multiple of 5 squared or if not is multiplied by 5
const sq5ormult5 = (j) => {
    if (j % 5 == 0 ){
        return j**5;
    }else {
       return j * 5;
    }
   
}

//Create table
const tbElement = document.createElement('table');

// Loop to create rows
for (let i = num1; i <= num2; i++) {
    const rowElement = document.createElement("tr");
    const tdElement = document.createElement("td");
    const td1Element = document.createElement("td");
    
    //Input numbers into table
    tdElement.innerText = i;
    td1Element.innerText = sq5ormult5(i);

//If number divisible number is squared highlight value on table
    if (i % 5 === 0) {
        tdElement.classList.add("bgBlue")
        td1Element.classList.add('bgBlue')
    }

    rowElement.appendChild(tdElement);
    rowElement.appendChild(td1Element);

    tbElement.append(rowElement);
}

// Add table to the document
document.getElementById('output').appendChild(tbElement);