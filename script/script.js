


const showCards = (arr) => {
    arr.forEach((el) => {
        const grid = document.querySelector(".grid")
        const div = document.createElement("div")
        div.slassName = "card"
        const img = document.createElement("img")
        img.className = "card__img"
        img.src = el.image
        div.appendChild(img)
        const title = document.createElement("h4")
        title.innerText = el.title
        title.className = "card__title"
        div.appendChild(title)
        grid.appendChild(div)
    });
}

fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json() 
  })
  .then((arr) => {
    showCards(arr)
  })


  