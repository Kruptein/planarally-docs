<template>
  <div class="logo">
    <g-link class="logo__link" to="/" title="Back to home">
      <LogoSmall v-if="theme !== 'dark'" class="logo__svg logo__svg" alt="Gridsome.org" />
      <LogoSmall v-else class="logo__svg logo__svg--dark" alt="Gridsome.org" />
    </g-link>
  </div>
</template>

<script>
import LogoSmall from "~/assets/images/pa-logo-small.svg";
export default {
  components: {
    LogoSmall,
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.logo {
  &__svg {
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    max-width: 50px;
    &--dark {
      background: #f1e7d0e1;
      border-radius: 25%;
    }
  }
}
</style>