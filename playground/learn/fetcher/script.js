fetch("example.txt")
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP Request Failed: ${response.status}`);
    }
    return response.text();
})
.then(text => {
    const pre = document.createElement("p");
    pre.innerHTML = text;
    document.querySelector("body").appendChild(pre);
})
.catch(e => {
    console.error(`ERR: ${e.message}`);
});