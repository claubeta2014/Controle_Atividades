<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" arial-label="Formulário para registro de atividades!">
                <input type="text" class="input" placeholder="Qual atividade deseja iniciar?" v-model="descricao" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TempoAtividade @atividadeFinalizada="finalizarAtividade" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

import TempoAtividade from "./TempoAtividade.vue"

export default defineComponent({
    name: "FormularioAtividade",
    emits: ['aoSalvarAtividade'],
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    components: {
        TempoAtividade
    },
    methods: {
        finalizarAtividade(tempoCorrido: number): void {
            this.$emit('aoSalvarAtividade', {
                duracaoSegundos: tempoCorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(projt => projt.id == this.idProjeto)
            })
            this.descricao = ''

        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script> 

<style>
.formulario {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>