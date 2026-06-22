<!-- <template>
    <a href="/snake_game">snake 1</a>
    <a href="/snake">snake 3Ds</a>
    <a href="/babbls">babbls</a>
</template> -->
<template>
  <div class="game-menu">
    <nav class="nav-container">
      <a href="/snake_game" class="nav-link snake-link">
        <span class="icon">🐍</span>
        <span class="text">Snake 1</span>
      </a>
      <a href="/snake" class="nav-link snake-3d-link">
        <span class="icon">🎮</span>
        <span class="text">Snake 3D</span>
      </a>
      <a href="/bubbls" class="nav-link bubbles-link">
        <span class="icon">⚽</span>
        <span class="text">Bubbles</span>
      </a>
    </nav>
    
    <!-- Контент страницы -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>
<style scoped>
/* Контейнер навигации */
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Стили для ссылок-кнопок */
nav a {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  flex: 0 1 auto; /* Адаптивная ширина */
  text-align: center;
  min-width: 120px;
}

/* Эффект при наведении */
nav a:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  background: #f8f9fa;
  border-color: #667eea;
}

/* Эффект при нажатии */
nav a:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  nav {
    gap: 8px;
    padding: 15px 10px;
  }
  
  nav a {
    padding: 10px 16px;
    font-size: 14px;
    min-width: 100px;
    flex: 1 1 calc(50% - 10px); /* 2 кнопки в ряд на планшетах */
  }
}

@media (max-width: 480px) {
  nav a {
    flex: 1 1 100%; /* 1 кнопка в ряд на телефонах */
    min-width: unset;
  }
}

/* Альтернативный стиль - компактный */
nav.compact {
  background: #f5f5f5;
  gap: 5px;
}

nav.compact a {
  padding: 8px 16px;
  font-size: 14px;
  background: transparent;
  color: #333;
  border: 1px solid #ddd;
}

nav.compact a:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

/* Стиль с иконками (если добавите) */
nav a::before {
  content: "🎮";
  margin-right: 8px;
  font-size: 18px;
}

nav a[href="/snake"]::before {
  content: "🐍";
}

nav a[href="/babbls"]::before {
  content: "";
}
</style>