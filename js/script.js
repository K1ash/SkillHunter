document.addEventListener('DOMContentLoaded', function() {
    const popupGallery = document.getElementById('popup-gallery');
    const popupImg = document.getElementById('popup-img');
    const popupCaption = document.getElementById('popup-caption');
    const close = document.querySelector('.popup-gallery .close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    const images = Array.from(document.querySelectorAll('.clickable'));
    let currentIndex;

    
    function openGallery(index) {
        currentIndex = index;
        popupImg.src = images[currentIndex].src;
        popupCaption.textContent = images[currentIndex].alt;
        popupGallery.style.display = 'block';
    }

  
    function closeGallery() {
        popupGallery.style.display = 'none';
    }

    
    function showPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        openGallery(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        openGallery(currentIndex);
    }

    
    images.forEach(function(img, index) {
        img.addEventListener('click', function() {
            openGallery(index);
        });
    });

   
    close.addEventListener('click', closeGallery);

    
    prev.addEventListener('click', showPrev);
    next.addEventListener('click', showNext);

    
    popupGallery.addEventListener('click', function(event) {
        if (event.target === popupGallery) {
            closeGallery();
        }
    });
});



window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.casess1 img, .casess img');
    const scrollPosition = window.scrollY;
    
    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top + window.scrollY;
        const imageHeight = image.offsetHeight;
        
        if (scrollPosition + window.innerHeight > imageTop + imageHeight / 2 && scrollPosition < imageTop + imageHeight) {
       
            image.classList.add('visible');
        } else {
     
            image.classList.remove('visible');
        }
    });
});









document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.container7 h2');

   
    const observer = new IntersectionObserver(entries => {
        
        let visibleElement = null;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleElement = entry.target;
            }
        });

       
        paragraphs.forEach(h2 => {
            if (h2 === visibleElement) {
                h2.classList.add('active');
            } else {
                h2.classList.remove('active');
            }
        });
    }, { threshold: 0.5 });

   
    paragraphs.forEach(h2 => observer.observe(h2));
});


document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
});

