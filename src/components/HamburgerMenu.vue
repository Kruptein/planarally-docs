<script setup lang="ts">
import { onMounted } from "vue";
import Bars from "~icons/fa-solid/bars";

const props = defineProps<{ element: string; toggleClass: string }>();

onMounted(() => {
    window.addEventListener("click", handleClick);
});

function getElement(): HTMLElement {
    return document.getElementById(props.element);
}

function handleClick(event: MouseEvent) {
    const element = getElement();
    const target = event.target as HTMLElement;
    if (target.id === "hamburger") {
        element.classList.toggle(props.toggleClass);
        event.stopPropagation();
    } else if (!element.contains(target)) {
        element.classList.remove(props.toggleClass);
        event.stopPropagation();
    }
}
</script>

<template>
    <a id="hamburger">
        <Bars />
        <div id="text">Menu</div>
    </a>
</template>

<style lang="scss">
#hamburger {
    position: fixed;
    z-index: 20;
    padding: 1.5rem;
    margin: 0.5rem;

    display: flex;
    align-items: center;

    background-color: var(---bg-color);

    @media (min-width: 960px) {
        display: none;
    }

    * {
        pointer-events: none;
    }

    #text {
        margin-left: 0.75rem;
    }
}
</style>
