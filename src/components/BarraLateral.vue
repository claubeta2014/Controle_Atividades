<template>
    <header>
        <div>
            <button class="button" @click="alterarCor">
                {{ textoBotao }}
            </button>
        </div>
        <div>
           <img class="fotos" src="../assets/logo4.png">
   
        </div>
    </header>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'BarraLateral',
    emits: ['aCorAlterada'],
    data() {
        return {
            modoEscuroAtivo: false
        }
    },
    computed: {
        textoBotao() {
            if (this.modoEscuroAtivo) {
                return 'Alterar para modo Escuro'
            }
            return 'Alterar para modo Claro'
        }
    },
    methods: {
        alterarCor() {

            this.$emit('aCorAlterada', this.modoEscuroAtivo)
            this.modoEscuroAtivo = !this.modoEscuroAtivo
        }
    }
})
</script>

<style scoped>
header {
    padding: 0.8rem;
    background: #310d66;
    width: auto;
    height: auto;
    text-align: center;


}

@media only screen and (max-width: 768px) {
    header {
        padding: auto;
        height: auto;
       

    }
}

.button {
    background: #310d66;
    color: white;
    border-radius: 50px;
}

.fotos {
    border-radius: 200px;
}
</style>
