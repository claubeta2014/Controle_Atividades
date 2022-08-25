<template>
    <FormularioAtividade @aoSalvarAtividade="salvarAtividade" />
    <div class="lista">
        <AtividadesFeitas v-for="(atividade, chave) in atividades" 
           :key="chave" :atividade="atividade"
            @excluir="excluirAtivado(atividade)" />
    </div>
    <BoxAtiv v-if="listaVazia">
        Vamos começar?
    </BoxAtiv>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioAtividade from '../components/FormularioAtividade.vue';
import AtividadesFeitas from '../components/AtividadesFeitas.vue';
import InteAtividade from '../interface/InteAtividade'
import BoxAtiv from '../components/BoxAtiv.vue';



export default defineComponent({
    name: "App",
    components: {
        FormularioAtividade,
        AtividadesFeitas,
        BoxAtiv

    },
    data() {
        return {
            atividades: [] as InteAtividade[]
        }
    },

    computed: {
        listaVazia(): boolean {
            return this.atividades.length === 0
        }
    },
    methods: {
        salvarAtividade(atividade: InteAtividade) {
            this.atividades.push(atividade)
            const parsed = JSON.stringify(this.atividades);
            localStorage.setItem("atividade", parsed);
        },
        excluirAtivado(atividade: InteAtividade) {
            this.atividades = this.atividades.filter(res =>
                atividade !== res
            )
        }
    },
    mounted() {
        if (localStorage.getItem("atividade")) {
            try {
                this.atividades = JSON.parse(localStorage.getItem("atividade")||'');
            } catch (e) 
            {
                localStorage.removeItem("atividade");
            }
        }
    }
    
});
</script>