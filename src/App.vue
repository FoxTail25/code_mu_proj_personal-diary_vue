<script setup>
import ProjectInfo from './components/ProjInfo.vue';
import Question from './components/icon/Question.vue';
</script>

<script>
import FormWrite from './components/FormWrite.vue';
import ListWrites from './components/ListWrites.vue';
import NotFound from './components/NotFound.vue';
import ReadRecord from './components/ReadRecord.vue';
import { useDiareStore } from './store/diare.js';

let store;

const routes = {
  '/': FormWrite,
  '/ListWrites': ListWrites,
  '/ReadWrite': ReadRecord,
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


  },
  created() {
    store = useDiareStore()
    store.setFirstData()
  }
}
</script>

<template>


  <div class="container">
    <header>


      <ul class="nav nav-tabs justify-content-center mb-4">

        <li class="nav-item">
          <a class="nav-link" href="#/">Запись в дневние</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/ListWrites">Cписок дат</a>
        </li>

      </ul>

      <!-- Button trigger modal -->
      <button type="button" class="question" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <Question />
      </button>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-3" id="staticBackdropLabel">Проект "Онлайн дневник"</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <ProjectInfo />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>

    </header>
    <component :is="currentView" />

  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.question {
  /* color: transparent; */
  position: absolute;
  right: 5px;
  top: 5px;
  /* outline: none; */
  background: none;
  border: none;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 10vw;
  }
}
</style>
