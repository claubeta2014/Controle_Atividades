<template>
  <section>
    <h1 class="title">Cadastrar Atividade</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Cadastrar</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>     
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { TipoNotif } from "@/interface/INotificacoes";
import { useStore } from "@/store";
import { ALTERAR_PROJETO, ADICIONAR_PROJETO} from "@/store/tp-mutacoes";
import { defineComponent } from "vue";
import useNotificador from '@/hooks/notificador'


export default defineComponent({
  name: 'FormulariosProj',
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }

  },
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERAR_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      }
      else {
        this.store.commit(ADICIONAR_PROJETO, this.nomeDoProjeto)
      }

      this.nomeDoProjeto = '';
      this.notificar(TipoNotif.SUCESSO, 'Ótimo!', 'Informação inserida com sucesso!')
      this.$router.push('/projetos')  
      
    }   
  },
  setup() {
    const store = useStore()
    const {notificar} = useNotificador()
    return {
      store,
      notificar
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



</style>