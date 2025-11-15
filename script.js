document.addEventListener("DOMContentLoaded", () => {
  const lavaContainer = document.querySelector('.lava-bg');

  // Create lava drops
  for (let i = 0; i < 25; i++) {
    const drop = document.createElement('div');
    drop.classList.add('lava-drop');
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDelay = Math.random() * 3 + 's';
    drop.style.animationDuration = 2 + Math.random() * 3 + 's';
    lavaContainer.appendChild(drop);
  }

  const transition = document.getElementById('page-transition');
  if (!transition) return; // safely exit if missing

  document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.href;

        transition.classList.add('active');

        transition.addEventListener('animationend', () => {
          window.location.href = href;
        }, { once: true });
      });
    }
  });
});

