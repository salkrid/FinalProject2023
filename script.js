$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    arrows: true,  
  });



// $('.slider').slick({
// 	infinite: true,
// 	dots: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	responsive: [
// 	    {
// 	      breakpoint: 768,
// 	      settings: {
// 	        slidesToShow: 2,
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 480,
// 	      settings: {
// 	        slidesToShow: 1,
// 	      }
// 	    }
//     ]
// });



// $('.slider').slick({
//     centerMode: true,
//     slidesToShow: 3,
//   });


// $('.slider').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   });

// $('.slider').slick();


// $(document).ready(function(){
// 	$('.slider').slick({
// 		arrows:true,
// 		dots:true,
// 		slidesToShow:3,
// 		autoplay:true,
// 		speed:1000,
// 		autoplaySpeed:800,
// 		responsive:[
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow:2
// 				}
// 			},
// 			{
// 				breakpoint: 550,
// 				settings: {
// 					slidesToShow:1
// 				}
// 			}
// 		]
// 	});
// });



function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Display submitted values (you can replace this with your desired logic)
    alert("Submitted Form\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
  
    // Clear form fields
    document.getElementById("contactForm").reset();
  }
  




// Add the following JavaScript code to your existing script.js file

document.addEventListener('DOMContentLoaded', function () {
    // Slide Projects
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        const translationValue = -currentSlide * 100 + '%';
        sliderContainer.style.transform = 'translateX(' + translationValue + ')';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Show the first slide
    showSlide(0);

    // Add event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
});
