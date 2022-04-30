<script setup lang="ts">
/*
    This component provides toggling of light-dark themes.
    The initial theme load is NOT handled by this component to avoid potential micro flashes.
    Instead this is handled by a blocking <script> in the main.astro file.
*/
import { ref } from "vue";
import Moon from "~icons/bx/moon";
import Sun from "~icons/akar-icons/sun";

const darkTheme = ref(false);

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    darkTheme.value = true;
} else if (currentTheme === "light") {
    darkTheme.value = false;
} else {
    darkTheme.value = prefersDarkScheme.matches;
}

function toggleTheme() {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    darkTheme.value = !darkTheme.value;
    localStorage.setItem("theme", theme);
}
</script>

<template>
    <a @click="toggleTheme"><Moon v-if="darkTheme" /> <Sun v-else /></a>
</template>
