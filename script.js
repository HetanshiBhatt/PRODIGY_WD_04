// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic typing effect
const typedText = "Hetanshi Bhatt";
const typingSpeed = 100; // milliseconds
let typedIndex = 0;

function typeText() {
    if (typedIndex < typedText.length) {
        document.querySelector('.dynamic-typing').textContent += typedText.charAt(typedIndex);
        typedIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing effect when page loads
window.onload = typeText;

// Hover effects for swoosh elements
document.querySelectorAll('.swoosh').forEach(element => {
    element.addEventListener('mouseover', function() {
        element.style.textShadow = '0 0 10px #00ff00';
        element.style.animation = 'swooshIn 0.5s ease-out';
    });
    element.addEventListener('mouseout', function() {
        element.style.textShadow = '';
        element.style.animation = '';
    });
});
