<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  background-color: #15c7ff;
  width: 100%;
  padding: 3em;
  margin: 1em;
}

</style>
