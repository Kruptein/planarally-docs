<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">

      <!-- <Logo/> -->
      <span>PlanarAlly</span>

      <Nav class="flex-fit"/>

      <!-- <SearchForm /> -->

      <nav class="header-actions flex">
        <ToggleTheme />

        <a
          aria-label="Twitter"
          href="//twitter.com/Kruptein"
          rel="noopener noreferrer"
          target="_blank"
          title="Follow me on Twitter"
        >
          <twitter-logo/>
        </a>

        <a
          aria-label="github"
          href="//github.com/Kruptein/planarally"
          rel="noopener noreferrer"
          target="_blank"
          title="PlanarAlly @ GitHub"
        >
          <github-logo
            height="20px"
            width="20px"
          />
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
// import Logo from './Logo'
import Nav from './Nav'
// import SearchForm from '@/components/SearchForm.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import GithubLogo from '@/assets/images/github-logo.svg'
import TwitterLogo from '@/assets/images/twitter-logo.svg'
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    // Logo,
    GithubLogo,
    TwitterLogo,
    ToggleTheme,
    // SearchForm,
    Nav,
    LazyHydrate
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  transition: background-color .3s, border-color, .3s;
  backdrop-filter: blur(4px);
  .header-bar {
    background: linear-gradient(90deg, var(--primary-color) 0%,  #8ED6FB 50%, #D32E9D 100%);
    padding: 2px;
    text-align: center;
    color:#FFF;
    font-size: 1rem;
    a {
      color: currentColor;
    }
  }
  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }
}
</style>