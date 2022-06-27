<template>
  <div class="home neon">
    <h2>
      Welcome to <br />
      Rock-Paper-Scissors-Lizard-Spock GAME
    </h2>
  </div>
  <div>
    <button class="glow-on-hover">
      <router-link to="/game" class="button">Let the game begin!</router-link>
    </button>
  </div>
  <div>
    <FooterView></FooterView>
  </div>
</template>

<script>
import FooterView from "@/components/footer/footer";
export default {
  name: "homeView",
  components: { FooterView },
};
</script>

<style scoped lang="scss">
@import "homeView.scss";
</style>
