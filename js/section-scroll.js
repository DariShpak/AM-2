
gsap.registerPlugin(ScrollTrigger)

const wrapper = document.querySelector(".services-wrapper")

gsap.to(wrapper, {
  x: () => -(wrapper.scrollWidth - window.innerWidth), // Рухаємо весь контейнер вліво
  ease: "none",
  scrollTrigger: {
    trigger: ".services-section", // Секція, де почнеться скрол
    start: "top top", // Початок анімації
    end: () => `+=${wrapper.scrollWidth}`, // Кінець анімації (ширина всього контейнера)
    scrub: true, // Плавність скролу
    pin: true, // Фіксуємо секцію під час горизонтального скролу
    anticipatePin: 1
  }
})
