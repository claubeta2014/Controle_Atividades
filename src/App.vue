<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuroAtivo}">
    
    <div class="column is-one-quarter">
      <BarraLateral @aCorAlterada="trocarCor"/>      
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioAtividade @aoSalvarAtividade="salvarAtividade" />
      <div class="lista">        
        <AtividadesFeitas v-for="(atividade, chave) in atividades" :key="chave" :atividade="atividade"/>
        </div>
       <BoxAtiv v-if="listaVazia">
        Você precisa estudar mais! 
      </BoxAtiv>
      
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioAtividade from './components/FormularioAtividade.vue';
import AtividadesFeitas from './components/AtividadesFeitas.vue';
import InteAtividade from './interface/InteAtividade'
import BoxAtiv from './components/BoxAtiv.vue';



export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioAtividade,
    AtividadesFeitas,
    BoxAtiv
    
},
  data() {
    return {
      atividades: [] as InteAtividade[],
      modoEscuroAtivo: false
    }
  },

  computed: {
    listaVazia(): boolean {
      return this.atividades.length === 0
    }
  },
  methods: {
    salvarAtividade(atividade: InteAtividade) {
      this.atividades.push(atividade)
    },
    trocarCor(modoEscuroAtivo : boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
  
}

main{
 --bg-primario: #fff;
 --texto-primerio: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
  }
.conteudo {
  background-color: var(--bg-primario) ;
}
</style>
