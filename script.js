/* CURSOR FLOW */
const cursor = document.querySelector('.cursor');
let x = 0, y = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  tx = e.clientX;
  ty = e.clientY;
});

function animateCursor() {
  x += (tx - x) * 0.15;
  y += (ty - y) * 0.15;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, .video, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

/* SCROLL STORY */
const stories = document.querySelectorAll('.story');
window.addEventListener('scroll', () => {
  stories.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });
});

/* DARK / LIGHT TOGGLE */
function toggleMode() {
  document.body.classList.toggle('dark');
}
