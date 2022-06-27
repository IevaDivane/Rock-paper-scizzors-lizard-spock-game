<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        Attention! Gambling can be addictive! Familiarize yourself with the
        rules and play responsibly. It is possible to exclude yourself from
        gambling by requesting a ban from the self-denied register
        <router-link to="/rules:here" class="button nav">here</router-link>.
        Please play responsibly.
      </p>
      <p>
        copyright &copy;2022
        <a href="https://www.linkedin.com/in/ieva-divane/" class="nav"
          >IevaDesign</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerView",
};
</script>

<style scoped lang="scss">
@import "footer";
</style>
