<template>
  <nav>
    <router-link to="/" class="nav">Home</router-link>
    <router-link to="/game" class="nav">Game</router-link>
    <router-link to="/rules" class="nav">Rules</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: center;
  gap: 200px;
}

.nav {
  color: #225762;
  text-decoration: none;
  &:hover {
    color: #ff00c8;
  }
}

body {
  color: white;
  background-color: black;
  font-family: Bahnschrift, sans-serif;
}

.neon {
  font-size: 20px;
  color: #fff;
  text-shadow: 0 0 8px yellow;
  animation: blinker 6s;
  animation-iteration-count: 1;
}

@keyframes blinker {
  0% {
    opacity: 0.2;
  }
  19% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  21% {
    opacity: 1;
  }
  22% {
    opacity: 0.2;
  }
  23% {
    opacity: 0.2;
  }
  36% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
  41% {
    opacity: 0;
  }
  42% {
    opacity: 1;
  }
  43% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
