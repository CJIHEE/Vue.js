<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main >
      <slot name="main"></slot>
    </main>
    <div>
      <slot name="default"></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
  footer {
    border-top: 1px solid #ccc;
    color: #666;
    font-size: 0.8em;
  }

  main {
    color :red;
  }
</style>