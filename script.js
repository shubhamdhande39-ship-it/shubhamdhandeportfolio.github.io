/* ================= CURSOR FLOW ================= */
const cursor = document.querySelector('.cursor');
let cx = 0, cy = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  tx = e.clientX;
  ty = e.clientY;
});

function cursorLoop() {
  cx += (tx - cx) * 0.18;
  cy += (ty - cy) * 0.18;
  cursor.style.transform = `translate(${cx}px, ${cy}px)`;
  requestAnimationFrame(cursorLoop);
}
cursorLoop();

document.querySelectorAll('a, .video-frame').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

/* ================= SCROLL STORY ================= */
const stories = document.querySelectorAll('.story');
window.addEventListener('scroll', () => {
  stories.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });
});
