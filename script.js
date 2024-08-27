function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light

    img.setAttribute("src", "./assets/Desktop/Avatar2.png")
  } else {
    img.setAttribute("src", "./assets/Desktop/Avatar.png")
  }
  //frase da img
  const imgAlt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "icone da marca de doces flavia doarte lightmodel")
  } else {
    img.setAttribute("alt", "icone da marca de doces flavia doarte darckmodel")
  }
}
