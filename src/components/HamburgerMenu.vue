<script setup lang="ts">
import Bars from "~icons/fa-solid/bars";

function toggleTheme(): void {
    document.getElementById("docs-nav").classList.toggle("mobileHide");
}
</script>

<template>
    <a @click="toggleTheme"><Bars /></a>
</template>
