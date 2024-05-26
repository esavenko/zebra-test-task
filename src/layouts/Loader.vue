<template>
  <div class="preloader-spinner">
    <div class="loader">
      <div class="loader-wheel"/>
      <div class="loader-text"/>
    </div>
  </div>
</template>

<style scoped>
.preloader-spinner {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ecf6ff;
  z-index: 21;
  display: flex;
  justify-content: center;
}

.spinner-container .spinner-symbol rect {
  height: 20px;
  width: 20px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(806deg);
  }
}

.loader {
  width: 50px;
  margin: auto;
}

.loader-wheel {
  animation: spin 1.2s infinite linear;
  border: 2px solid #4bc6fb;
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
}

.loader-text {
  color: #fff;
}

.loader-text:after {
  animation: load 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
