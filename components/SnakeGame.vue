<template>
  <div class="snake-game-container">
    <h2>Змейка</h2>
    <canvas
      ref="gameCanvas"
      :width="canvasWidth"
      :height="canvasHeight"
      tabindex="0"
      style="border: 2px solid #333; display: block; margin: 0 auto;" 
    />
    <div style="text-align: center; margin-top: 12px;">
      <button @click="restartGame" :disabled="!gameCanvas">Начать заново</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type DataHTMLAttributes } from 'vue';
interface Point {
  x: number;
  y: number;
}

const gridSize = 20;
const canvasWidth = 700;
const canvasHeight = 700;
const gridWidth = canvasWidth / gridSize;
const gridHeight = canvasHeight / gridSize;

const gameCanvas = ref<HTMLCanvasElement | null>(null);
const gameRunning = ref(true);
const score = ref(0);
let gameLoopId: number | null = null;

// === Игровое состояние (локальное, не реактивное) ===
let direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' = 'RIGHT';
let nextDirection: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' = 'RIGHT';
let snake: Point[] = [];
let food: Point = { x: 0, y: 0 };

function generateFood(): Point {
  let newFood: Point;
  do {
    newFood = {
      x: Math.floor(Math.random() * gridWidth),
      y: Math.floor(Math.random() * gridHeight),
    };
  } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
  return newFood;
}

function initGame() {
  snake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
  ];
  direction = 'RIGHT';
  nextDirection = 'RIGHT';
  food = generateFood();
  score.value = 0;
  gameRunning.value = true;
}

function handleKeyDown(e: KeyboardEvent) {
  if (!gameRunning.value) return;
  switch (e.key) {
    case 'ArrowUp': if (direction !== 'DOWN') nextDirection = 'UP'; break;
    case 'ArrowDown': if (direction !== 'UP') nextDirection = 'DOWN'; break;
    case 'ArrowLeft': if (direction !== 'RIGHT') nextDirection = 'LEFT'; break;
    case 'ArrowRight': if (direction !== 'LEFT') nextDirection = 'RIGHT'; break;
  }
}

function draw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Змея
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? '#2e7d32' : '#4caf50';
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    ctx.strokeStyle = '#1b5e20';
    ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });

  // Еда
  ctx.fillStyle = '#f44336';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  // Счёт
  ctx.fillStyle = '#000';
  ctx.font = '16px Arial';
  ctx.fillText(`Счёт: ${score.value}`, 10, 20);
}

function gameOver(ctx: CanvasRenderingContext2D) {
  gameRunning.value = false;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = '#fff';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Игра окончена', canvasWidth / 2, canvasHeight / 2);
  ctx.font = '16px Arial';
  ctx.fillText(`Финальный счёт: ${score.value}`, canvasWidth / 2, canvasHeight / 2 + 30);
  ctx.textAlign = 'left';
}

function gameLoop() {
  if (!gameRunning.value || !gameCanvas.value) return;

  const ctx = gameCanvas.value.getContext('2d');
  if (!ctx) return;

  direction = nextDirection;
  const head = { ...snake[0] };

  switch (direction) {
    case 'UP': head.y--; break;
    case 'DOWN': head.y++; break;
    case 'LEFT': head.x--; break;
    case 'RIGHT': head.x++; break;
  }

  // Проверка на столкновение со стеной или собой
  if (
    head.x < 0 ||
    head.x >= gridWidth ||
    head.y < 0 ||
    head.y >= gridHeight ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    gameOver(ctx);
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    score.value += 10;
  } else {
    snake.pop();
  }

  draw(ctx);
  gameLoopId = window.setTimeout(gameLoop, 120);
}

function restartGame() {
  if (gameLoopId !== null) {
    clearTimeout(gameLoopId);
    gameLoopId = null;
  }
  initGame();
  if (gameCanvas.value) {
    const ctx = gameCanvas.value.getContext('2d');
    if (ctx) {
      draw(ctx);
      gameLoop();
      gameCanvas.value.focus();
    }
  }
}

onMounted(() => {
  initGame();
  if (gameCanvas.value) {
    const ctx = gameCanvas.value.getContext('2d');
    if (ctx) {
      draw(ctx);
      gameCanvas.value.focus();
      gameLoop();
    }
  }
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  if (gameLoopId !== null) {
    clearTimeout(gameLoopId);
    gameLoopId = null;
  }
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.snake-game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}
</style>