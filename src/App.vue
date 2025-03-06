<!-- <script setup>
</script> -->

<script>
import FormWrite from './components/FormWrite.vue';
import ListWrites from './components/ListWrites.vue';
import NotFound from './components/NotFound.vue';

const routes = {
  '/': FormWrite,
  '/ListWrites': ListWrites
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
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
  }
}
</script>

<template>

  
  <div class="my-container">
    <header>
      
      
      <ul class="nav nav-tabs justify-content-center">
        
        <li class="nav-item">
          <a class="nav-link" href="#/" >Запись в дневние</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/ListWrites" >Cписок дат</a>
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

/*
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
