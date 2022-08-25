<template>
  <div class="projetos">
    <h1 class="title">Projetos/Atividades</h1>
    <router-view></router-view>
     
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjetosFeitos'
})
</script>

<style scoped>
.title {
  padding: 1.50rem;
  color: #fb0915;
}
.projetos {
  padding: 1.50rem;  
}

</style>