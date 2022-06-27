<template>
  <div class="app">
    <header class="app-header neon">
      <h1>THE GAME</h1>
    </header>
    <div>
      <div class="score-board">
        <div id="user-label" class="badge">you</div>
        <div id="computer-label" class="badge">comp</div>
        <span id="user-score">{{ myScore }}</span
        >:<span id="computer-score">{{ pcScore }}</span>
      </div>
    </div>
    <div class="game__field">
      <div class="game__start-icon">
        <div :class="computedUser"></div>
        <div>
          <p class="result-text">{{ text }}</p>
        </div>
        <div :class="computedRand"></div>
      </div>
      <div class="game__play-icons">
        <img
          class="choice"
          @click="choose('rock')"
          src="https://www.nicepng.com/png/full/437-4379880_dwayne-johnson-dwayne-the-rock-johnson.png"
          alt="rock"
        />
        <img
          class="choice"
          @click="choose('paper')"
          src="https://media-www.canadiantire.ca/product/automotive/automotive-outdoor-adventure/auto-travel-storage/0408439/tst-rv-marine-2-ply-toilet-paper-4-pack-7b02a95f-a54f-4c36-846c-7f19beb7fa08.png?im=whresize&wid=294&hei=294"
          alt="paper"
        />
        <img
          class="choice"
          @click="choose('scissors')"
          src="https://www.ozgroomingworld.com.au/assets/full/WA-SIT60.png?20210309031739"
          alt="scissors"
        />
        <img
          class="choice"
          @click="choose('lizard')"
          src="https://pngimg.com/uploads/lizard/lizard_PNG37.png"
          alt="lizard"
        />
        <img
          class="choice"
          @click="choose('spock')"
          src="  https://www.jing.fm/clipimg/full/188-1882546_spock-startrek-ecosystem-meme.png"
          alt="spock"
        />
      </div>
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
  name: "gameView",

  components: { FooterView },

  data: () => ({
    myPick: null,
    randPick: "",
    myScore: 0,
    pcScore: 0,
    text: "",
  }),

  methods: {
    choose(pick: null) {
      this.myPick = pick;
      const picks = ["rock", "paper", "scissors", "spock", "lizard"];
      this.randPick = picks[Math.floor(Math.random() * picks.length)];
      this.setScore();
    },

    setScore() {
      if (this.myPick == "rock") {
        if (this.randPick == "paper") {
          this.text = "Rock is wrapped in paper";
          this.pcScore++;
        } else if (this.randPick == "scissors") {
          this.text = "Rock crushes scissors";
          this.myScore++;
        } else if (this.randPick == "lizard") {
          this.text = "Rock crushes lizard";
          this.myScore++;
        } else if (this.randPick == "spock") {
          this.text = "Rock is vaporized by Spock";
          this.pcScore++;
        } else {
          this.text = "Draw";
        }
      } else if (this.myPick == "paper") {
        if (this.randPick == "rock") {
          this.text = "Paper covers rock";
          this.myScore++;
        } else if (this.randPick == "scissors") {
          this.text = "Paper cut with scissors";
          this.pcScore++;
        } else if (this.randPick == "lizard") {
          this.text = "Paper is in the mouth of a lizard";
          this.pcScore++;
        } else if (this.randPick == "spock") {
          this.text = "Paper disproves Spock";
          this.myScore++;
        } else {
          this.text = "Draw";
        }
      } else if (this.myPick == "lizard") {
        if (this.randPick == "rock") {
          this.text = "Lizard is crushed from a rock";
          this.pcScore++;
        } else if (this.randPick == "scissors") {
          this.text = "Lizard's head is cut off";
          this.pcScore++;
        } else if (this.randPick == "paper") {
          this.text = "Lizard eats paper";
          this.myScore++;
        } else if (this.randPick == "spock") {
          this.text = "Lizard is poisoned by a Spock";
          this.myScore++;
        } else {
          this.text = "Draw";
        }
      } else if (this.myPick == "spock") {
        if (this.randPick == "rock") {
          this.text = "Spock vaporizes rock";
          this.myScore++;
        } else if (this.randPick == "scissors") {
          this.text = "Spock smashes scissors";
          this.myScore++;
        } else if (this.randPick == "lizard") {
          this.text = "Spock is poisoned with lizard venom";
          this.pcScore++;
        } else if (this.randPick == "paper") {
          this.text = "Spock is disproved by paper";
          this.pcScore++;
        } else {
          this.text = "Draw";
        }
      } else {
        // scissors
        if (this.randPick == "rock") {
          this.text = "Scissors are crushed with a rock";
          this.pcScore++;
        } else if (this.randPick == "paper") {
          this.text = "Scissors cuts paper";
          this.myScore++;
        } else if (this.randPick == "lizard") {
          this.text = "Scissors decapitates lizard";
          this.myScore++;
        } else if (this.randPick == "spock") {
          this.text = "Scissors is smashed by a Spock";
          this.pcScore++;
        } else {
          this.text = "Draw";
        }
      }
    },
  },

  computed: {
    computedUser: function () {
      return {
        rock: this.myPick === "rock",
        paper: this.myPick === "paper",
        scissors: this.myPick === "scissors",
        spock: this.myPick === "spock",
        lizard: this.myPick === "lizard",
      };
    },

    computedRand: function () {
      return {
        rock: this.randPick === "rock",
        paper: this.randPick === "paper",
        scissors: this.randPick === "scissors",
        spock: this.randPick === "spock",
        lizard: this.randPick === "lizard",
      };
    },
  },
});
</script>

<style scoped lang="scss">
@import "./game";
</style>
