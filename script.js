document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.start-page').style.display = 'none';
    document.getElementById('selectPage').style.display = 'flex';
});

function createFallingDots() {
    const numDots = 100;
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.animationDuration = `${Math.random() * 5 + 2}s`;
        document.body.appendChild(dot);
    }
}

createFallingDots();
