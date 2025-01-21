gsap.registerPlugin(ScrollTrigger)

const wrapper = document.querySelector(".services-wrapper")

gsap.to(wrapper, {
  x: () => -(wrapper.scrollWidth - window.innerWidth + 50), // Додаємо запас
  ease: "none",
  scrollTrigger: {
    trigger: ".services-section",
    start: "top top",
    end: () => `+=${wrapper.scrollWidth - window.innerWidth + 50}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true // Оновлює розрахунки при зміні розміру
  }
})
