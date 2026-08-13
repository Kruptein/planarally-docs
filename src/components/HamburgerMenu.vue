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
    top: calc(70px + 0.5rem);
    left: 0.5rem;
    z-index: 25;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    border: 1px solid rgba(150, 150, 150, 0.25);

    display: flex;
    align-items: center;
    cursor: pointer;

    background-color: var(---bg-color);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

    @media (min-width: 960px) {
        display: none;
    }

    * {
        pointer-events: none;
    }

    #text {
        margin-left: 0.5rem;
        font-size: 0.9rem;
        font-weight: 500;
    }
}
</style>
