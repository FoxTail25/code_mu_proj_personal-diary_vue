<!-- <script setup>
</script> -->

<script>
import FormWrite from './components/FormWrite.vue';
import ListWrites from './components/ListWrites.vue';
import NotFound from './components/NotFound.vue';
import { useDiareStore } from './store/diare.js';

let store;

const routes = {
  '/': FormWrite,
  '/ListWrites': ListWrites
}

export default {
  data() {

    return {
      currentPath: window.location.hash,
      personalDiary: [],
    }
  },
  methods: {

  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {

    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })

    // useDiareStore().setFirstData()
    store = useDiareStore()
    store.setFirstData()

  },
  created() {
  }
}
</script>

<template>


  <div class="my-container">
    <header>


      <ul class="nav nav-tabs justify-content-center mb-4">

        <li class="nav-item">
          <a class="nav-link" href="#/">Запись в дневние</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/ListWrites">Cписок дат</a>
        </li>

      </ul>
    </header>
    <component :is="currentView" />

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
