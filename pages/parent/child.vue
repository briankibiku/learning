<template>
  <div>
    <h1>I am the child view</h1>
    <NuxtChild :key="123" />
    <button class="btn btn-primary">
      <NuxtLink to="/" style="color: white">Go Home</NuxtLink>
    </button>
  </div>
</template>
