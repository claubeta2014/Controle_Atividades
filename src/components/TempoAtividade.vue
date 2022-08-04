<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <ContadorTempo :tempoSegundos=" tempoSegundos " />
        <button class="button" @click=" iniciar " :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span> iniciar </span>
        </button>
        <button class="button" @click=" parar " :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span> Parar </span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContadorTempo from './ContadorTempo.vue';

export default defineComponent({
    name: "TempoAtividade",
    emits: ['atividadeFinalizada'],
    components: {
        ContadorTempo
    },
    data(){
        return {
            tempoSegundos: 0,
            contadorTempo: 0,
            minutos: 0,
            intervalo: 0,
            cronometroRodando: false
        }
    }, 
    methods: {
        iniciar()  {        
             
            this.cronometroRodando = true            
            this.contadorTempo = setInterval(() => {
                this.tempoSegundos += 1             
            }, 1000 )
            const minutos = 60 * 60 * 1000           
            this.intervalo = setInterval(() => {
                alert("Hora de fazer um intervalo!");
            }, minutos)
        },
        parar() {
            this.cronometroRodando = false
            clearInterval(this.contadorTempo)
            this.$emit('atividadeFinalizada', this.tempoSegundos)
            this.tempoSegundos = 0
            
        }  
    }  

});
</script>
<style scoped>
.button{
    border-radius: 50px;
}

</style>
