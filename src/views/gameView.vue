<template>
  <div class="game">
    <Game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "@/components/game.vue"; // @ is an alias to /src

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "game",
  components: {
    Game,
  },
});
</script>
