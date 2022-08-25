<template>
    <BoxAtiv>
        <div class="columns">
            <div class="column is-5" >
               {{atividade.descricao || 'Atividade sem Informação'}}
            </div>
            <div class="column is-3"> {{atividade.projeto?.nome || ''}} </div>
            <div class="column">
                <ContadorTempo :tempoSegundos="atividade.duracaoSegundos"/>
            </div>
            <div>
                <button class="button ml-4 is-danger is-rounded" @click="excluir()">
                    Excluir                    
                </button> 
            </div>
        </div>
    </BoxAtiv>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import ContadorTempo from "./ContadorTempo.vue";
import InteAtividade from "../interface/InteAtividade";
import BoxAtiv from "./BoxAtiv.vue"

export default defineComponent({
    name: 'AtividadesFeitas',
    components: {
        ContadorTempo,
        BoxAtiv
       
    },
    props: {
        atividade: {
            type: Object as PropType<InteAtividade>,
            required: true
        }
    },
    methods: {
        excluir(){
            this.$emit("excluir");
        }
    },
});
</script>
<style scoped>
 .button {
   background: brown;
   color: white;
 }
</style>

