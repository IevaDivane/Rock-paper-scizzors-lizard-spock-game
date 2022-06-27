<template>
  <div class="game">
    <Game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "@/components/game/game.vue"; // @ is an alias to /src

export default defineComponent({
  name: "gameView",
  components: {
    Game,
  },
});
</script>
