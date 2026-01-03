

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
/********************* light-dark js ************************/
//




// tiny slide **** home

try {
  var slider = tns({
    container: '.home-slider',
    loop: true,
    autoplay: false,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    gutter: 30,
    responsive: {

      992: {
        gutter: 30,
        items: 1
      },

    }
  });

} catch (error) {

}



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



// swiper slider

try {
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 20,
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1500,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

} catch (error) {

}



// tiny slide **** home

try {
  var slider = tns({
    container: '.work-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    gutter: 30,
    responsive: {

      992: {
        gutter: 30,
        items: 3
      },

    }
  });

} catch (error) {

}


try {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
} catch (error) {

}


// 
// home-5


try {
  var slider = tns({
    container: '.home5-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    items:2,
    gutter: 30,
    responsive: {

      992: {
        gutter: 30,
        items: 3
      },

      576:{
        gutter: 30,
        items: 2
      }

    }
  });

} catch (error) {

}




// 
// home-5


try {
  var slider = tns({
    container: '.home6-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 5000,
    speed: 900,
    center: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    items:2,
    gutter: 30,
    responsive: {

      992: {
        gutter: 30,
        items: 2.5
      },

      576:{
        gutter: 30,
        items: 2
      }

    }
  });

} catch (error) {

}





// Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContents = document.querySelectorAll('.tab-content');

  tabItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
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

// Navbar Collapse Functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarCollapse');
  const navLinks = document.querySelectorAll('#navbarCollapse .nav-link');

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

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
