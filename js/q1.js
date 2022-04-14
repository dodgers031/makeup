// // //Ask user for input
const n1 = prompt("Enter a number:");
const n2 = prompt("Enter a number:");

const num1 = Number(n1);
const num2 = Number(n2);


// console.log(num1,num2)


const sumNotMult4or7 = (start,end) => {
    let tot = 0;
    for(let i=start; i <= end; i++){
        if (start * 4 !==0 && i * 7 !==0){
            tot += i;
        }
    }
    return tot
}
// console.log(sumNotMult4or7(num1,num2));

if (num1 > 0 && num2 >0 && num1<num2) {
    document.write('<center><h3>Sum of numbers not multipliable by 4 or 7</h3>');
    document.write(`<center><h3>starting at ${num1} and ending with ${num2}</h3>`);
    document.write('<center><h3>displayed in the table below</h3>');
}   else{
    document.write('<font color = \"red\"><center><h3>Please enter a valid input!</h3></font color = \"red\">');
    document.write(`<font color = \"red\"><center><h3>You entered ${n1} and ${n2}.</h3></font color = \"red\">`);
    document.write('<font color = \"red\"><center><h3>Click Refresh to Start Again</h3></font color = \"red\">');
}


//Create Table
const tbElement = document.createElement("table");
tbElement.setAttribute("align","center");
//Input values into table
for (let i = 1; i <= n1; i++){
    //Create Rows
    const rowElement = document.createElement('tr');
    const tdElement = document.createElement("td");
    const td2Element = document.createElement("td");
    
    tdElement.innerText = i;
    td2Element.innerText = sumNotMult4or7(i);

    rowElement.appendChild(tdElement);
    rowElement.appendChild(td2Element);

    tbElement.append(rowElement);

}

document.getElementById('output');
