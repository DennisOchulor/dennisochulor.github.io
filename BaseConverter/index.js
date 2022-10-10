function convertNumber() {
    event.preventDefault();
    let num = parseInt(document.forms["convertForm"]["number"].value);
    let oriBase = parseInt(document.forms["convertForm"]["oriBase"].value);
    let convBase = parseInt(document.forms["convertForm"]["convBase"].value);

    if(!validateInput(num, oriBase)) {
        alert("Invalid number entered for selected base!");
        return;
    }

    if(oriBase === 10) {
        let result = convertFrom10(num, convBase);
        document.getElementById("result").innerHTML = `Result: ${result}`;                    
    }
    else if(convBase === 10) {
        let result = convertTo10(num, oriBase);
        document.getElementById("result").innerHTML = `Result: ${result}`;    
    }
    else {
        let numInBase10 = convertTo10(num, oriBase);
        let result = convertFrom10(numInBase10, convBase);
        document.getElementById("result").innerHTML = `Result: ${result}`; 
    }
    
}

function convertFrom10(num, convBase) {
    let arr = [];
    while(num>=convBase) {
        arr.push(num % convBase);
        num = Math.floor(num/convBase);
    }

    let result = num.toString();
    let arrLength = arr.length;
    for(i=0;i<arrLength;i++) {
        result = result.concat(arr.pop().toString());
    }

    return result;
}

function convertTo10(num, oriBase) {
    let numAsString = num.toString();
    let length = numAsString.length;
    let result = 0;
    let i = 0;
    
    for(j=length-1;j>=0;j--) {
        result = result + (parseInt(numAsString.charAt(j)) * Math.pow(oriBase, i));
        i++;
    }

    return result;
}

function validateInput(num, oriBase) {
    validInput = true;
    num = num.toString();
    for(i=0;i<num.length;i++) {
       if( parseInt(num.charAt(i)) >= oriBase ) {
            validInput = false;
            break;
       }
    }

    return validInput;
}