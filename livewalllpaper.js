const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Snake properties
const segmentSize = 20; // Size of each segment
const numSegments = 30; // Number of segments
const segmentSpacing = 5; // Spacing between segments
const turnChance = 0.01; // Chance of the snake changing direction
const numSnakes = 90; // Number of snakes
const snakes = [];

// Initialize snakes
for (let i = 0; i < numSnakes; i++) {
    const snakeSegments = [];
    // Initialize snake segments
    for (let j = 0; j < numSegments; j++) {
        snakeSegments.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            angle: Math.random() * Math.PI * 2 // Random initial direction
        });
    }
    snakes.push(snakeSegments);
}

// Draw function
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each snake
    for (let i = 0; i < numSnakes; i++) {
        const snakeSegments = snakes[i];
        for (let j = 0; j < snakeSegments.length; j++) {
            const segment = snakeSegments[j];
            // Move segment
            segment.x += Math.cos(segment.angle) * segmentSize * 0.1; // Adjust speed
            segment.y += Math.sin(segment.angle) * segmentSize * 0.1; // Adjust speed
            // Wrap around canvas edges
            if (segment.x < 0) segment.x = canvas.width;
            if (segment.x > canvas.width) segment.x = 0;
            if (segment.y < 0) segment.y = canvas.height;
            if (segment.y > canvas.height) segment.y = 0;
            // Draw segment
            ctx.fillStyle = `rgba(255, 255, 255, ${1 - j / numSegments})`;
            ctx.fillRect(segment.x - segmentSize / 2, segment.y - segmentSize / 2, segmentSize, segmentSize);
            // Update segment angle (turning)
            if (Math.random() < turnChance) {
                segment.angle += Math.random() * Math.PI / 2 - Math.PI / 4; // Random small turn
            }
        }

        // Remove last segment and add new segment at the head
        const newHead = {
            x: snakeSegments[0].x,
            y: snakeSegments[0].y,
            angle: snakeSegments[0].angle
        };
        snakeSegments.pop();
        snakeSegments.unshift(newHead);
    }

    requestAnimationFrame(draw);
}

// Start animation
draw();
