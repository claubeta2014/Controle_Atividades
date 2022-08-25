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
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class=" fas fa-tasks"></i>
                        Lista de Atividades
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Atividades Projetadas 
                    </router-link>
                </li>
            </ul>
        </nav>
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
    width: 100%;
    height: 100%;
    text-align: center;


}

@media only screen and (max-width: 768px) {
    header {
        padding: auto;
        height: auto;  
    }
}

.button:hover {
    background: #310d66;
    color: white;
    border-radius: 50px;
}

.fotos {
    border-radius: 200px;
}

.panel li {
    margin: 8px 0;
}

.link{
    color:aliceblue;
}

.link:hover{
    color: #FAF0CA;
}
</style>
