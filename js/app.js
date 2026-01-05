

/********************* Menu Js **********************/

function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

// Handle scroll events without preventing default behavior
window.addEventListener('scroll', () => {
  windowScroll();
})





//
// text-animation

try {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  function typewrite() {
    if (toRotate === 'undefined') {
      changeText()
    }
    else
      var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
    document.body.appendChild(css);
  };
  typewrite();

} catch (error) {

}








try {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
} catch (error) {

}















// Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContents = document.querySelectorAll('.tab-content');

  tabItems.forEach(item => {
    item.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');

      // Remove active class from all items and contents
      tabItems.forEach(tab => tab.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked item and corresponding content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
});

// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  // Ensure all projects are visible on page load
  projectItems.forEach(item => item.classList.remove('hidden'));

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      try {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        projectItems.forEach(item => {
          const category = item.getAttribute('data-category') || '';

          if (filterValue === 'all' || category === filterValue) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });

        // Ensure contact section remains accessible after filtering
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.style.display = 'block';
          contactSection.style.visibility = 'visible';
          contactSection.style.opacity = '1';
        }

        // Re-initialize AOS for any newly visible elements
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }

      } catch (error) {
        console.error('Filter error:', error);
      }
    });
  });
});

// Mobile Contact Section Safeguard
document.addEventListener('DOMContentLoaded', function() {
  // Ensure contact section is always visible on mobile
  function ensureContactVisibility() {
    const contactSection = document.getElementById('contact');
    if (contactSection && window.innerWidth <= 768) {
      contactSection.style.display = 'block';
      contactSection.style.visibility = 'visible';
      contactSection.style.opacity = '1';
      contactSection.style.position = 'relative';
      contactSection.style.zIndex = '1';
    }
  }

  // Check on page load
  ensureContactVisibility();

  // Check on window resize
  window.addEventListener('resize', ensureContactVisibility);

  // Check after any filter interactions
  document.addEventListener('click', function(event) {
    if (event.target.closest('.filter-btn')) {
      setTimeout(ensureContactVisibility, 100);
    }
  });
});

// Navbar Collapse Functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarCollapse');
  const navLinks = document.querySelectorAll('#navbarCollapse .nav-link');
  const feedbackBtn = document.querySelector('#navbarCollapse .btn-modern-feedback');

  // Toggle navbar on button click
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
      this.setAttribute('aria-expanded', navbarCollapse.classList.contains('show'));
    });

    // Close navbar when clicking on a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      });
    });

    // Close navbar when clicking on feedback button
    if (feedbackBtn) {
      feedbackBtn.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      });
    }

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

