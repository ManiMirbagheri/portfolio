document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { button: '#project1', image: 'url("https://static.wixstatic.com/media/yourimage1.jpg")' },
        { button: '#project2', image: 'url("https://static.wixstatic.com/media/yourimage2.jpg")' },
        { button: '#project3', image: 'url("https://static.wixstatic.com/media/yourimage3.jpg")' },
        { button: '#project4', image: 'url("https://static.wixstatic.com/media/yourimage4.jpg")' },
        { button: '#project5', image: 'url("https://static.wixstatic.com/media/yourimage5.jpg")' }
    ];

    projects.forEach(item => {
        const button = document.querySelector(item.button);
        button.addEventListener("mouseenter", () => {
            document.getElementById('backgroundBox').style.backgroundImage = item.image;
        });
        button.addEventListener("mouseleave", () => {
            document.getElementById('backgroundBox').style.backgroundImage = '';
        });
    });
});