// script.js
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var quote = document.querySelector('.quote');
    if (quote) {
      quote.classList.add('hidden');
      // Optional: Remove the element after the transition to prevent it from blocking clicks
      setTimeout(function() {
        quote.style.display = 'none';
      }, 1000); // Matches the duration of the CSS transition
    }
  });
});
