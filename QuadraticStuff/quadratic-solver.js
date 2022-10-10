function solve() {
    event.preventDefault();
    let a = parseFloat(document.forms["solveForm"]["a"].value);
    let b = parseFloat(document.forms["solveForm"]["b"].value);
    let c = parseFloat(document.forms["solveForm"]["c"].value);

    if(!validateInput(a,b,c)) {
        return;
    }

    let discriminant = b * b - (4.0 * a * c);

    if(discriminant > 0.0) {
        let r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").innerHTML = `x=${r1} or x=${r2}`; 
    }
    else if (discriminant === 0.0) {
        let r1 = -b / (2.0 * a);
        document.getElementById("result").innerHTML = `x=${r1}`; 
    }
    else {
        document.getElementById("result").innerHTML = "No real roots."; 
    }
}

function validateInput(a,b,c) {
    valid = true;
    if(a === 0.0) {
        valid = false;
        alert("Invalid input! Value of a cannot be zero.");
    }

    return valid;
}