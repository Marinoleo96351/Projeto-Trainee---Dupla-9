document.addEventListener('DOMContentLoaded', function() {

    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (n >= slides.length) {
            currentSlide = 0;
        } 
        else if (n < 0) {
            currentSlide = slides.length - 1;
        } 
        else {
            currentSlide = n;
        }

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(i);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    showSlide(currentSlide);
    resetInterval();

    
    const reviewsPerPage = 3;
    const allReviews = document.querySelectorAll('.review-item');
    const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
    
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageDisplay = document.querySelector('.current-page-display');
    
    let currentPage = 1;

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * reviewsPerPage;
        const endIndex = pageNumber * reviewsPerPage - 1;

        allReviews.forEach(review => {
            review.style.display = 'none';
        });

        allReviews.forEach((review, index) => {
            if (index >= startIndex && index <= endIndex) {
                review.style.display = 'flex';
            }
        });

        currentPage = pageNumber;
        pageDisplay.textContent = currentPage;

        if (currentPage === 1) {
            prevPageBtn.classList.add('hidden');
        } else {
            prevPageBtn.classList.remove('hidden');
        }

        if (currentPage === totalPages) {
            nextPageBtn.classList.add('hidden');
        } else {
            nextPageBtn.classList.remove('hidden');
        }
    }

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    showPage(1);

});