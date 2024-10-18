function enroll(courseName) {
    alert(`You have enrolled in the ${courseName} course!`);
    window.location.href = 'courses.html';
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});
