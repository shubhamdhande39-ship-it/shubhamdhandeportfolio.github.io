/* ================= DPI ACCURATE CURSOR ================= */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.transform =
    `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
});

/* Hover scale */
document.querySelectorAll('a, .card, .video-frame').forEach(el => {
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
