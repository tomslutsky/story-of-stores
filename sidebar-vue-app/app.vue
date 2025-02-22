<script setup lang="ts">
import { store } from "../app/store";

function rate5Stars() {
  store.addRating({
    product: window.location.pathname.split("/").pop()!,
    rating: 5,
  });
}
</script>

<template>
  <div class="container">
    <button @click="rate5Stars">
      <span>Rate 5 stars</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  padding: 20px;
  background-color: var(--color-black);
}
button {
  all: unset;
  cursor: pointer;
  color: var(--color-white);
}

svg {
  stroke: var(--color-white);
  transition: fill 0.3s ease;

  &:hover {
    fill: var(--color-primary);
  }

  &:active {
    fill: var(--color-accent);
  }
}
</style>
