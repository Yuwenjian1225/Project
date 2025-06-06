<template>
  <router-view v-slot="{ Component }" v-if="isRouterAlive">
    <transition :name="transitionName">
      <div id="app">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
      transitionName: ''
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = ''
      }
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: black;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.5s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
}
</style>

