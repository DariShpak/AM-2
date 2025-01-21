gsap.registerPlugin(ScrollTrigger)

const servicesWrapper = document.querySelector(".services-wrapper")
const serviceCount = document.querySelectorAll(".services-item").length
const servicesSection = document.querySelector(".services-section")
const servicesItems = document.querySelectorAll(".services-item")

gsap.to(servicesWrapper, {
  x: () => `-${(serviceCount - 2) * window.innerWidth}`, // Прокручуємо всі елементи
  ease: "none",
  scrollTrigger: {
    trigger: ".services-section",
    pin: true,
    scrub: true,
    start: "top top",
    end: () => `+=${window.innerWidth * serviceCount}` // Виправлено обчислення
  }
})





