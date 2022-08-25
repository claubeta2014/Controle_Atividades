<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">

    <div class="column is-one-quarter">
      <BarraLateral @aCorAlterada="trocarCor" />
    </div>    
    <div class="column is-three-quarter conteudo">
      <NotifAtiv/>
      <router-view></router-view>     
    </div>    
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import NotifAtiv from './components/NotifAtiv.vue';




export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    NotifAtiv
},
  data() {
    return {
       modoEscuroAtivo: true
    }
  },

  methods: {
    trocarCor(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;

}

main {
  --bg-primario: #fff;
  --texto-primerio: #000;
}

main.modo-escuro {
  --bg-primario: #310d66;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
