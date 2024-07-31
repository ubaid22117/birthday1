document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const animationContainer = document.getElementById('animation-container');
    const message = document.getElementById('message');
    const flowersContainer = document.getElementById('flowers-container');

    revealButton.addEventListener('click', () => {
        animationContainer.classList.remove('hidden');
        showFlowers();
        message.textContent = 'Happy Birthday [SAMAN]!';
    });

    function showFlowers() {
        const flowers = ['🌸', '🌼', '🌷', '🌺', '💐'];
        const numberOfFlowers = 30;
        for (let i = 0; i < numberOfFlowers; i++) {
            const flower = document.createElement('div');
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.classList.add('flower');
            flower.style.left = `${Math.random() * 100}%`;
            flower.style.fontSize = `${Math.random() * 40 + 20}px`;
            flower.style.animationDelay = `${Math.random() * 3}s`;
            flower.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
            flower.style.transform = `translateY(${Math.random() * 200}px) rotate(${Math.random() * 360}deg)`;
            flowersContainer.appendChild(flower);
        }
    }
});
