<template>
  <div class="rules">
    <div class="rules__header neon">
      <h2>What the freak is that???</h2>
    </div>
    <div class="rules__video">
      <h3>Explanation in video format</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/x5Q6-wMx-K8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="rules__text">
      <h3>Explanation in text format</h3>
      <p>
        As Sheldon explains, "Scissors cuts paper, paper covers rock, rock
        crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors
        decapitates lizard, lizard eats paper, paper disproves Spock, Spock
        vaporizes rock, and as it always has, rock crushes scissors."
      </p>
    </div>
    <div class="rules__schema">
      <h3>Explanation in schema format</h3>
      <img
        class="rules__image"
        src="https://zditect.com/main-advanced/images/python-rock-paper-scissors-4.png"
        alt="rules"
      />
    </div>
  </div>
  <div>
    <FooterView></FooterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterView from "@/components/footer/footer.vue";

export default defineComponent({
  name: "rulesView",
  components: { FooterView },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "rules";
</style>
