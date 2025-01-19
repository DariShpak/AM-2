const scrollList = document.querySelector(".services-list")
const leftButton = document.querySelector(".scroll-button.left")
const rightButton = document.querySelector(".scroll-button.right")

leftButton.addEventListener("click", () => {
  scrollList.scrollBy({
    left: -scrollList.clientWidth,
    behavior: "smooth"
  })
})

rightButton.addEventListener("click", () => {
  scrollList.scrollBy({
    left: scrollList.clientWidth,
    behavior: "smooth"
  })
})
