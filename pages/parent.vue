<template>
  <div>
    <h1>I am the parent view</h1>
    <a class="btn btn-primary">
      <NuxtLink to="/parent/child" style="color: white">View Child</NuxtLink>
    </a>
    <NuxtChild />
  </div>
</template>
