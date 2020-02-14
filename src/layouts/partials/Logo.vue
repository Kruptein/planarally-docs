<template>
  <div class="logo">
    <g-link class="logo__link" to="/" title="Back to home">
      <!-- <LogoSmall class="logo__svg hide-for-small" alt="Gridsome.org" /> -->
      <LogoSmall class="logo__svg logo__svg--small" alt="Gridsome.org" />
    </g-link>
  </div>
</template>

<script>
import LogoSmall from "~/assets/images/pa-logo-small.svg";
export default {
  components: {
    LogoSmall
  }
};
</script>

<style lang="scss">
.logo {
  &__svg {
    max-width: 60px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    &--small {
      max-width: 40px;
    }
  }
}
</style>