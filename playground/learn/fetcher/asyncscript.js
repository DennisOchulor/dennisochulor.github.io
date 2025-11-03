async function handle() {
    const response = await fetch("example.txt");
    if (!response.ok) {
        throw new Error(`ERR: ${response.status}`)
    }

    const text = await response.text();
    const pre = document.createElement("p");
    pre.innerHTML = text;
    document.querySelector("body").appendChild(pre);
    console.log("nice");
}

console.log("hey");
handle();
console.log("ho");