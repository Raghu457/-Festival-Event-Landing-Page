document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navbar on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Countdown Timer
    // Set the date for the event (YYYY-MM-DD format)
    const eventDate = new Date('2025-08-20T00:00:00').getTime();

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div><span>${days}</span>Days</div>
                <div><span>${hours}</span>Hours</div>
                <div><span>${minutes}</span>Minutes</div>
                <div><span>${seconds}</span>Seconds</div>
            `;
        }

        // If the countdown is over, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            if (countdownElement) {
                countdownElement.innerHTML = "The Event has Started!";
            }
        }
    }, 1000);

});