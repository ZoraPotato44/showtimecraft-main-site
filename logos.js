function changeLogo(logoPath) {
    const logoElement = document.getElementById('showtime-logo');
    if (!logoElement) return;

    logoElement.style.opacity = 0;
    setTimeout(() => {
        logoElement.src = logoPath;
        logoElement.style.opacity = 1;
    }, 300);
}
