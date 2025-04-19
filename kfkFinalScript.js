
// Hamburger Icon/ Menu

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

// navbar fixed transparent to solid
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { 
            navbar.classList.add('solid');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.add('transparent');
            navbar.classList.remove('solid');
        }
    });



        // Scroll up button
    // Show button after scrolling down 100px
  window.onscroll = () => {
    const button = document.getElementById("backToTop");
    if (window.scrollY > 300) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };

  // Smooth scroll back to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
