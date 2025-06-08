const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animatables = entry.target.querySelectorAll('.fact, .product, .slide-in-left, .slide-in-right');
      animatables.forEach(el => el.classList.add('animate'));

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.6
});

document.querySelectorAll('.module-wrapper').forEach(section => {
  if (section.querySelector('.fact, .product, .slide-in-left, .slide-in-right')) {
    observer.observe(section);
  }
});