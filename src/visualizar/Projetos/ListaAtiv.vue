<template>
  <section>
    <router-link to="/projetos/novo" class="button" >
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Nova Atividade</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id" :projeto="projeto">
          <td >{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class=" button ml-4 is-danger is-rounded" @click="excluir(projeto.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
import { EXCLUIR_PROJETO } from "@/store/tp-mutacoes";


export default defineComponent({
  name: 'ListaAtiv',
  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id);
    }
  },
  setup() {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos),
      store
    }
  },
  mounted(){
    if(localStorage.getItem("projetos")){
      try{
        this.projetos = JSON.parse(localStorage.getItem("projetos") || '');
      }catch (e){
        localStorage.removeItem("projetos");
      }
    }
  }  

});
</script>

<style scoped>
.label {
  color: rgb(238, 10, 37);
}

.title {
  color: rgb(238, 10, 37);

}

.button:hover {
  color: rgb(231, 29, 110);

}

.button1 {
  background: brown;
  color: white;
}
</style>