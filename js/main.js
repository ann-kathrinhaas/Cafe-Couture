const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: window.innerWidth <= 768 ? 0.3 : 0.6
});

document.querySelectorAll('.fact, .product, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});