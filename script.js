function minus() {
  const elem = document.getElementById("count")
  const count = parseInt(elem.textContent)  - 1
  elem.textContent = count
  console.log("minus", count)
}

function plus() {
    const elem = document.getElementById("count")
  const count = parseInt(elem.textContent)  + 1
  elem.textContent = count
  console.log("plus", count)
}