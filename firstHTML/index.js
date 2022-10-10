// This is my first JS code!!!
// also wow what a mess this is
console.log("hello world!");

let student = {
    name: "Dennis",
    age: 17,
    class: "5A"
};

student.age = 18;
student['class'] = "5 Amanah";

console.log(student);

function thisIsFun() {
    let number = document.getElementById("num").innerText;
    number = parseInt(number,10) + 1;
    document.getElementById("num").innerHTML = number;
}

function commentSubmit() {
    let comment = document.forms["commentForm"]["comment"].value;
    console.log("Comment: " + comment);
    alert("Thanks for your feedback!");

    for(i=0;i<5;i++) {
        console.log(i);
    }

    if(comment === "lol") {
        console.log("bruh");
    }
}