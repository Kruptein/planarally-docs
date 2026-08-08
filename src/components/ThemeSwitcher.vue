<script setup lang="ts">
/*
    This component provides toggling of light-dark themes.
    The initial theme load is NOT handled by this component to avoid potential micro flashes.
    Instead this is handled by a blocking <script> in the main.astro file.
*/
import { ref, onMounted } from "vue";
import Sun from "~icons/akar-icons/sun";
import Moon from "~icons/bx/moon";

const darkTheme = ref(false);

function applyTheme(isDark: boolean) {
    darkTheme.value = isDark;
    
    if (isDark) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
    
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

onMounted(() => {
    const currentTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (currentTheme === "dark") {
        applyTheme(true);
    } else if (currentTheme === "light") {
        applyTheme(false);
    } else {
        applyTheme(prefersDark);
    }
});

function toggleTheme() {
    applyTheme(!darkTheme.value);
}
</script>

<template>
    <a @click="toggleTheme"><Moon v-if="darkTheme" /> <Sun v-else /></a>
</template>
