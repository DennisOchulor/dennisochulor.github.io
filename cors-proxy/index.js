url = new URL(window.location.href)
fetchUrl = url.searchParams.get("goto")
fetch(fetchUrl)
.then((response) => response.text())
.then((text) => {
    document.getElementById("theOne").innerText = text
})