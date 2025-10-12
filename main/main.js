function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fancyText = document.querySelector("strong")

fancyText.addEventListener("click", () => {
    r = getRandomInt(0,255)
    g = getRandomInt(0,255)
    b = getRandomInt(0,255)
    fancyText.setAttribute("style", `color: rgb(${r},${g},${b})`)
})