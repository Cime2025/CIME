// Compte à rebours
const eventDate = new Date('April 24, 2025 00:00:00').getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "L'événement a commencé !";
    }
}, 1000);