const sections = document.querySelectorAll('.glassy-box, .section');

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver(revealOnScroll, options);
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

