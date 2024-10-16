function enroll(courseName) {
    alert(`You have enrolled in the ${courseName} course!`);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});
