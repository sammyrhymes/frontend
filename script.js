  // Toggle hidden menu on and off

  const openHiddenMenu = document.querySelector('#openHiddenMenu')
  const closeHiddenMenu = document.querySelector('#closeHiddenMenu')
  const hiddenMenu = document.querySelector('#hiddenMenu')

  function displayHiddenMenu(){
      hiddenMenu.classList.remove('hidden', 'w-0')
      hiddenMenu.classList.add('w-48', 'p-2')
      console.log('clicked!')
  }

  function hideHiddenMenu(){
      hiddenMenu.classList.add('hidden', 'w-0')
      hiddenMenu.classList.remove('w-48', 'p-2')
      console.log('clicked!')
  }

  openHiddenMenu.addEventListener('click', displayHiddenMenu)
  closeHiddenMenu.addEventListener('click', hideHiddenMenu)


  // carousel


  document.addEventListener("DOMContentLoaded", function () {
    // Find all carousels
    const carousels = document.querySelectorAll('[id="carousel"]');

    // Store intervals for each carousel
    let carouselIntervals = [];
    const nextSlide = () => {
      if (currentIndex < cards.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; // Loop back to the first
      }
      updateCarousel();
  };

    // Function to stop carousel on medium screens and above
    const stopCarousel = (index, carousel) => {
        if (carouselIntervals[index]) {
            clearInterval(carouselIntervals[index]);
            carouselIntervals[index] = null;
        }
        // Reset transform to 0 when stopping carousel to avoid overflow
        carousel.style.transform = 'translateX(0)';
    };
    

    // Function to start carousel on smaller screens
    const startCarousel = (index, nextSlide) => {
        if (!carouselIntervals[index]) {
            carouselIntervals[index] = setInterval(nextSlide, 1000); // Change the interval as needed
        }
    };



    // Function to check screen size and stop/start carousels accordingly
    const checkScreenSize = () => {
        carousels.forEach((carousel, index) => {
            if (window.innerWidth >= 768) {
                stopCarousel(index, carousel); // Stop carousel on medium screens and above
            } else {
                startCarousel(index, nextSlide); // Start carousel on small screens
            }
        });
    };

    // Loop through each carousel and add functionality
    carousels.forEach((carousel, index) => {
        const prevButton = carousel.parentElement.querySelector('.prev');
        const nextButton = carousel.parentElement.querySelector('.next');

        // Get all cards in this carousel
        const cards = carousel.querySelectorAll('[id="card"]');
        let currentIndex = 0;




        // Function to update carousel position
        const updateCarousel = () => {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Ensure both buttons are visible after each click
            prevButton.style.display = 'inline-block';
            nextButton.style.display = 'inline-block';
        };

        // Add event listeners to next button
        nextButton.addEventListener('click', function () {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the first
            }
            updateCarousel();
        });

        // Add event listeners to prev button
        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = cards.length - 1; // Loop to the last
            }
            updateCarousel();
        });

        // Ensure the buttons are visible initially
        prevButton.style.display = 'inline-block';
        nextButton.style.display = 'inline-block';

        // Check screen size initially
        checkScreenSize();

        // Add resize event listener to check screen size dynamically
        window.addEventListener('resize', checkScreenSize);
    });
});

    


  
