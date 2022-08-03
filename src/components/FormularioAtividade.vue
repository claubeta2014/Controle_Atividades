<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" 
            role="form" 
            arial-label="Formulário para registro de atividades!">
                <input 
                type="text" 
                class="input" 
                placeholder="Qual atividade deseja iniciar?" 
                v-model="descricao"/>
            </div>
            <div class="column">
                <TempoAtividade @atividadeFinalizada="finalizarAtividade"/>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TempoAtividade from "./TempoAtividade.vue"

export default defineComponent({
    name: "FormularioAtividade",
    emits:['aoSalvarAtividade'],
    data(){
        return {
            descricao: ''
        }
    },
    components: {
        TempoAtividade
    },
    methods: {
        finalizarAtividade(tempoCorrido: number) : void {
            this.$emit('aoSalvarAtividade', {
                duracaoSegundos: tempoCorrido,
                descricao: this.descricao
            })
            this.descricao = ''
            
        }   
     }
});
</script> 

<style>
 .formulario{
    background-color: var(--bg-primario);
    color: var(--texto-primario);
 }
</style>