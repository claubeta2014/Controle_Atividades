<template>
    <section>
        <strong class="tela"> 
            {{ tempoCorrido  }} 
            </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ContadorTempo',

    props: {
        tempoSegundos: {
            type: Number, 
            default: 0          
            }
    },
    computed: {
        tempoCorrido () : string {
            return new Date(this.tempoSegundos * 1000).toISOString().substr( 11, 8 );
        }
    }   
})
</script>

<style scoped>
.tela {
   color: var(--texto-primario);
   color: brown;
}

</style>
