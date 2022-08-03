<template>
    <header>
        <div>
            <button class="button" @click="alterarCor" >
                {{ textoBotao }}
            </button>
        </div>
        <h1>
            <img src="../assets/logo.png">
            <img src="../assets/logo2.png">
            <img src="../assets/logo3.jpg">
            <img src="../assets/logo4.png">
            <img src="../assets/logo5.jpg">
        </h1>
    </header>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'BarraLateral',
    emits: ['aCorAlterada'], 
    data(){
        return {
            modoEscuroAtivo: true
        }
    },
    computed: {
        textoBotao(){
            if(this.modoEscuroAtivo){
                return 'Alterar para modo Escuro'
            }
            return 'Altera para modo Claro'
        }
    },
    methods: {
        alterarCor(){
            
             this.$emit('aCorAlterada', this.modoEscuroAtivo )
             this.modoEscuroAtivo = !this.modoEscuroAtivo
        }
    }
})
</script>

<style scoped>
header {
    padding: 0.8rem;
    background: #310d66;
    width: 100%;
    height: auto;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: auto;
        height: auto;
    }
}
.button{
    background: #ba0a0a;
    color: rgb(101, 249, 131);
    border-left: unset;
}
</style>
